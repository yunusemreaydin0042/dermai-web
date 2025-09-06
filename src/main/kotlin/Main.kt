package com.kapgan.dermai

import com.kapgan.dermai.firebase.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.js.Promise
import kotlin.js.json
import kotlinext.js.jsObject
import kotlin.js.Date
import kotlin.math.round


external interface Diagnosis {
    var confidence: String
    var prediction1: String
    var prediction2: String
    var prediction3: String
}

external interface DiseaseData {
    var date: String
    var description: Array<String>
    var diagnosis: Array<Diagnosis>
    var imagePaths: Array<String>
    var userId: String
    var isConfirmed: Boolean
    var comments: Array<String>
}

external interface User {
    var uid: String
    var name: String
    var surname: String
    var usertype: String
    var date: String
    var diseases: List<DiseaseData>
}

private const val USER_AUTH_COOKIE = "userAuth"

fun getCookie(name: String): String? {
    val nameEQ = "$name="
    val ca = document.cookie.split(';').toTypedArray()
    for (i in ca.indices) {
        var c = ca[i]
        while (c.startsWith(' ')) c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length)
        }
    }
    return null
}

fun setCookie(name: String, value: String, days: Int) {
    val expires = if (days > 0) {
        val date = js("new Date()")
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        "; expires=" + date.toUTCString()
    } else ""
    document.cookie = "$name=$value$expires; path=/"
}

fun deleteCookie(name: String) {
    document.cookie = "$name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}

fun main() {
    val root = document.getElementById("root")!!

    val firebaseConfig = json(
        "apiKey" to "AIzaSyDJ5amrfwWKWYy2Z7sLkKs6tDAWFgr_ekk",
        "authDomain" to "dermai-9640c.firebaseapp.com",
        "projectId" to "dermai-9640c",
        "storageBucket" to "dermai-9640c.appspot.com",
        "messagingSenderId" to "1056979294284",
        "appId" to "1:1056979294284:web:d66e2e1fa160b368ef7ce9",
        "measurementId" to "G-QRNBWYV5WB"
    )
    val app = initializeApp(firebaseConfig)
    val auth = getAuth(app)
    val db = getFirestore(app)

    val loginHTML: String = """
        <div class="col-md-6">
            <div class="card">
                <div class="card-header text-center">
                    <h3>DermAI Panel</h3>
                </div>
                <div class="card-body">
                    <form id="login-form">
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailInput" required>
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Şifre</label>
                            <input type="password" class="form-control" id="passwordInput" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 dermai-color">Giriş Yap</button>
                        <p id="error-message" class="text-danger mt-3" style="display: none;"></p>
                    </form>
                </div>
            </div>
        </div>"""

    val dashboardHTML: String = """
        <div class="row">
            <div class="col-md-3">
                <div class="card mb-3">
                    <div id="dermdiv" class="card-body text-center">
                        <img src="user.svg" alt="user"/>
                        <h5 id="derm-name">Yükleniyor...</h5>
                        <p>Dermatolog</p>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div id="user-list">Yükleniyor...</div>
            </div>
        </div>
    """.trimIndent()

    // Uygulama kabuğu
    root.innerHTML = """
    <style>
        html, body { height: 100%; margin: 0; }
        #page-wrapper { min-height: 100vh; display: flex; flex-direction: column; }
        .disease-container { display: flex; gap: 20px; margin-bottom: 20px; align-items: flex-start; }
        .disease-info { flex: 1; }
        .disease-image { flex-shrink: 0; max-width: 300px; }
        .user-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
        .user-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
        .user-name { margin: 0; font-size: 1.2rem; }
        .user-info-side { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 15px; }
        .user-details { flex: 1; }
        .date-time-container { position: absolute; top: 15px; right: 15px; text-align: right; }
        .date-text { font-size: 0.9rem; font-weight: bold; color: #6c757d; margin: 0; }
        .time-text { font-size: 0.8rem; color: #6c757d; margin: 0; }
        .disease-card { position: relative; }

        /* Navbar ve Footer rengini özelleştir */
        .navbar, footer {
            background-color: #C7FFFD !important;
        }
        .navbar .navbar-brand, 
        .navbar .nav-link, 
        footer p {
            color: #000 !important;
        }

        @media (max-width: 768px) {
            .disease-container { flex-direction: column; }
            .disease-image { max-width: 100%; }
            .user-header { flex-direction: column; text-align: center; }
            .user-info-side { flex-direction: column; }
            .date-time-container { position: static; text-align: left; margin-bottom: 10px; }
        }
        .dermai-color{
           background: linear-gradient(to left, #4CAF50, #2196F3, #9C27B0);
        }
    </style>
    <div id="page-wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark dermai-color">
            <div class="container-fluid">
                <img src="logo.svg" alt="dermai" height="80px" />
                <a class="navbar-brand" href="#"><img src="dermai.svg" alt="dermai" height="40px"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto" id="nav-links"></ul>
                </div>
            </div>
        </nav>
        <div id="main-content-area" class="flex-grow-1 container mt-5 pt-3">
            <div id="login-container" class="d-flex justify-content-center align-items-center" style="display: none;"></div>
            <div id="dashboard-container" style="display: none;"></div>
        </div>
        <footer class="text-center py-3 mt-auto dermai-color">
            <p>© 2025 Dermai | Dermatolog Paneli</p>
        </footer>
    </div>
""".trimIndent()


    val loginContainer = document.getElementById("login-container") as HTMLElement
    val dashboardContainer = document.getElementById("dashboard-container") as HTMLElement
    val navLinks = document.getElementById("nav-links") as HTMLElement

    fun renderDashboard() {
        loginContainer.innerHTML = ""
        dashboardContainer.innerHTML = dashboardHTML
        loginContainer.style.display = "none"
        dashboardContainer.style.display = "block"
        navLinks.innerHTML = """<li><button  id="logoutBtn" class="nav-link"><img src="exit.svg" height="55px"/></button></li>"""

        val dermNameH5 = document.getElementById("derm-name") as HTMLElement
        val userListDiv = document.getElementById("user-list") as HTMLElement
        userListDiv.textContent = "Yükleniyor..."

        MainScope().launch {
            val userUid = auth.currentUser?.uid
            if (userUid != null) {
                val loggedInUser = getUserData(db, userUid)
                dermNameH5.textContent = if (loggedInUser.usertype == "derm")
                    "${loggedInUser.name} ${loggedInUser.surname}" else "Kullanıcı Tipi: ${loggedInUser.usertype}"
            } else dermNameH5.textContent = "Kullanıcı Bulunamadı"

            try {
                userListDiv.innerHTML = ""
                val usersCol = collection(db, "users")
                val usersSnap = getDocs(usersCol).await()
                val userDocs = usersSnap.docs as Array<dynamic>

                userDocs.forEach { doc ->
                    val userUid = doc.id as String
                    val user = getUserData(db, userUid)

                    if (user.diseases.isEmpty() || user.usertype == "derm") return@forEach

                    val cardDiv = document.createElement("div")
                    cardDiv.setAttribute("class", "card mb-4 disease-card")

                    val cardBody = document.createElement("div")
                    cardBody.setAttribute("class", "card-body")

                    user.diseases.forEachIndexed { index, disease ->
                        // Tarih ve saat bilgisini ayrıştır
                        val dateTimeParts = disease.date.split(" ")
                        val date = Date(disease.date)
                        val datePart = if (dateTimeParts.isNotEmpty()) "${date.getDay()}/${date.getMonth()}/${date.getFullYear()}" else ""
                        val timePart = if (dateTimeParts.size > 1) "${date.getHours()}:${date.getMinutes()}" else ""

                        // Tarih ve saat container'ını oluştur (sağ üst köşe)
                        val dateTimeContainer = document.createElement("div")
                        dateTimeContainer.setAttribute("class", "date-time-container")

                        val dateText = document.createElement("p")
                        dateText.setAttribute("class", "date-text")
                        dateText.textContent = datePart
                        dateTimeContainer.appendChild(dateText)

                        val timeText = document.createElement("p")
                        timeText.setAttribute("class", "time-text")
                        timeText.textContent = timePart
                        dateTimeContainer.appendChild(timeText)

                        cardBody.appendChild(dateTimeContainer)

                        val diseaseContainer = document.createElement("div")
                        diseaseContainer.setAttribute("class", "disease-container")

                        // Kullanıcı bilgilerini resmin sağında göster
                        val userInfoSide = document.createElement("div")
                        userInfoSide.setAttribute("class", "user-info-side")

                        // Resimleri solda göster
                        val imageColumn = document.createElement("div")
                        imageColumn.setAttribute("class", "disease-image")
                        disease.imagePaths.forEach { imgUrl ->
                            val img = document.createElement("img")
                            img.setAttribute("src", imgUrl)
                            img.setAttribute("alt", "Cilt analizi")
                            img.setAttribute("class", "img-fluid rounded shadow mb-2")
                            img.setAttribute("style", "max-width: 100%; height: auto;")
                            imageColumn.appendChild(img)
                        }
                        userInfoSide.appendChild(imageColumn)

                        // Kullanıcı bilgilerini sağda göster
                        val userDetails = document.createElement("div")
                        userDetails.setAttribute("class", "user-details")

                        // Kullanıcı ismi
                        val userNameDiv = document.createElement("div")
                        userNameDiv.setAttribute("class", "user-header")

                        val avatarImg = document.createElement("img")
                        avatarImg.setAttribute("src", "user.svg")
                        avatarImg.setAttribute("alt", "Kullanıcı")
                        avatarImg.setAttribute("class", "user-avatar")
                        userNameDiv.appendChild(avatarImg)

                        val userName = document.createElement("h5")
                        userName.setAttribute("class", "user-name")
                        userName.textContent = "${user.name} ${user.surname}"
                        userNameDiv.appendChild(userName)

                        userDetails.appendChild(userNameDiv)

                        // Hastalık bilgileri
                        val diseaseInfo = document.createElement("div")
                        diseaseInfo.setAttribute("class", "disease-info")

                        val descPara = document.createElement("p")
                        descPara.setAttribute("class", "mb-2")
                        descPara.innerHTML = "<strong>Açıklama:</strong> ${disease.description.joinToString()}"
                        diseaseInfo.appendChild(descPara)

                        val diagPara = document.createElement("p")
                        diagPara.setAttribute("class", "mb-3")
                        diagPara.innerHTML = "<strong>Tahmin:</strong> ${
                            disease.diagnosis.joinToString { "${it.prediction1}" }
                        }"
                        diseaseInfo.appendChild(diagPara)
                        val confPara = document.createElement("p")
                        confPara.setAttribute("class","mb-3")
                        confPara.innerHTML = "<strong>Doğruluk:</strong> %${
                            disease.diagnosis.joinToString { "${round(it.confidence.toDouble() / 10) * 10}" }
                        }"
                        diseaseInfo.appendChild(confPara)

                        val btnGroup = document.createElement("div")
                        btnGroup.setAttribute("class", "d-flex gap-2 mb-3")

                        val confirmBtn = document.createElement("button")
                        confirmBtn.setAttribute("class", "btn dermai-color btn-sm")
                        confirmBtn.textContent = if (disease.isConfirmed) "Onaylandı" else "Onayla"
                        if (disease.isConfirmed) confirmBtn.setAttribute("disabled", "true")

                        confirmBtn.addEventListener("click", { _: Event ->
                            val diseaseRef = doc(db, "userDiseaseData", userUid)
                            val promise: Promise<Unit> = updateDoc(diseaseRef, json("isConfirmed" to true))
                            promise.then {
                                window.alert("Hastalık onaylandı ✅")
                                confirmBtn.textContent = "Onaylandı"
                                confirmBtn.setAttribute("disabled", "true")
                            }.catch { err: dynamic -> console.error("Onaylama hatası:", err) }
                        })

                        val commentBtn = document.createElement("button")
                        commentBtn.setAttribute("class", "btn dermai-color btn-sm")
                        commentBtn.textContent = "Yorum Ekle"

                        val modalId = "commentModal-${userUid}-${index}"
                        document.body!!.insertAdjacentHTML("beforeend", """
                            <div class="modal fade" id="$modalId" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="${modalId}Label">Yorum Yaz</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                                  </div>
                                  <div class="modal-body">
                                    <textarea class="form-control" id="commentInput-$modalId" rows="3" placeholder="Yorumunuzu yazın..."></textarea>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">İptal</button>
                                    <button type="button" class="btn dermai-color" id="saveCommentBtn-$modalId">Kaydet</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        """)

                        commentBtn.addEventListener("click", { _: Event ->
                            val modalEl = document.getElementById(modalId)!!
                            val modal = js("new bootstrap.Modal(modalEl)")
                            modal.show()

                            val saveBtn = document.getElementById("saveCommentBtn-$modalId")!!
                            saveBtn.addEventListener("click", { _: Event ->
                                val input = document.getElementById("commentInput-$modalId") as HTMLTextAreaElement
                                val comment: String = input.value
                                if (comment.isNotBlank()) {
                                    val diseaseRef = doc(db, "userDiseaseData", userUid)
                                    val commentPromise: Promise<Unit> =
                                        updateDoc(diseaseRef, json("comments" to arrayUnion(comment)))
                                    commentPromise.then {
                                        window.alert("Yorum eklendi 💬")
                                        input.value = ""
                                        modal.hide()
                                    }.catch { err: dynamic ->
                                        console.error("Yorum ekleme hatası:", err)
                                    }
                                }
                            }, jsObject<dynamic> { once = true })
                        })

                        btnGroup.appendChild(confirmBtn)
                        btnGroup.appendChild(commentBtn)
                        diseaseInfo.appendChild(btnGroup)

                        userDetails.appendChild(diseaseInfo)
                        userInfoSide.appendChild(userDetails)
                        diseaseContainer.appendChild(userInfoSide)
                        cardBody.appendChild(diseaseContainer)
                    }

                    cardDiv.appendChild(cardBody)
                    userListDiv.appendChild(cardDiv)
                }
            } catch (e: dynamic) {
                console.error("Veri çekme hatası:", e)
                userListDiv.textContent = "Veri çekilemedi."
            }
        }

        (document.getElementById("logoutBtn") as HTMLButtonElement).addEventListener("click", { _: Event ->
            deleteCookie(USER_AUTH_COOKIE)
            window.location.reload()
        })
    }

    fun renderLogin() {
        loginContainer.innerHTML = loginHTML
        dashboardContainer.innerHTML = ""
        loginContainer.style.display = "flex"
        dashboardContainer.style.display = "none"
        navLinks.innerHTML = ""

        val loginForm = document.getElementById("login-form") as HTMLElement
        val emailInput = document.getElementById("emailInput") as HTMLInputElement
        val passwordInput = document.getElementById("passwordInput") as HTMLInputElement
        val errorMessage = document.getElementById("error-message") as HTMLElement

        loginForm.addEventListener("submit", { event: Event ->
            event.preventDefault()
            MainScope().launch {
                try {
                    val email = emailInput.value
                    val password = passwordInput.value
                    val result = signInWithEmailAndPassword(auth, email, password).await()
                    setCookie(USER_AUTH_COOKIE, result.user.uid, 7)
                    renderDashboard()
                } catch (e: dynamic) {
                    errorMessage.textContent = "Giriş başarısız: " + e.message
                    errorMessage.style.display = "block"
                    console.error("Giriş hatası:", e)
                }
            }
        })
    }

    if (getCookie(USER_AUTH_COOKIE) != null) {
        MainScope().launch {
            val userUid = getCookie(USER_AUTH_COOKIE)
            if (userUid != null) {
                try {
                    val userData = getUserData(db, userUid)
                    if (userData.usertype == "derm") renderDashboard()
                    else { deleteCookie(USER_AUTH_COOKIE); renderLogin() }
                } catch (e: dynamic) {
                    console.error("Oturum doğrulama hatası:", e)
                    deleteCookie(USER_AUTH_COOKIE)
                    renderLogin()
                }
            } else renderLogin()
        }
    } else renderLogin()
}

suspend fun getUserData(db: dynamic, userUid: String): User {
    val userDocRef = doc(db, "users", userUid)
    val docSnap = getDoc(userDocRef).await()
    val data = docSnap.data() ?: jsObject<dynamic> {}

    val name = data.name as? String ?: "NULL"
    val surname = data.surname as? String ?: "NULL"
    val usertype = data.userType as? String ?: "patient"
    val date = data.date as? String ?: ""

    val diseaseDocRef = doc(db, "userDiseaseData", userUid)
    val diseaseSnap = getDoc(diseaseDocRef).await()
    val diseaseData = diseaseSnap.data()

    val diseases: List<DiseaseData> = if (diseaseData != null) {
        val dates = diseaseData["dates"] as? Array<String> ?: arrayOf()
        val desc = diseaseData["description"] as? Array<String> ?: arrayOf()
        val diagArray = diseaseData["diagnosis"] as? Array<dynamic> ?: arrayOf()
        val imgPaths = diseaseData["image_paths"] as? Array<String> ?: arrayOf()
        val userId = diseaseData["user_id"] as? String ?: userUid
        val isConfirmed = diseaseData["isConfirmed"] as? Boolean ?: false
        val comments = diseaseData["comments"] as? Array<String> ?: arrayOf()

        listOf(jsObject<DiseaseData> {
            this.date = dates.getOrNull(0) ?: ""
            this.description = desc
            this.diagnosis = diagArray.map { diag ->
                jsObject<Diagnosis> {
                    confidence = diag.confidence as? String ?: ""
                    prediction1 = diag.prediction1 as? String ?: ""
                    prediction2 = diag.prediction2 as? String ?: ""
                    prediction3 = diag.prediction3 as? String ?: ""
                }
            }.toTypedArray()
            this.imagePaths = imgPaths
            this.userId = userId
            this.isConfirmed = isConfirmed
            this.comments = comments
        })
    } else emptyList()

    return jsObject<User> {
        this.uid = userUid
        this.name = name
        this.surname = surname
        this.usertype = usertype
        this.date = date
        this.diseases = diseases
    }
}