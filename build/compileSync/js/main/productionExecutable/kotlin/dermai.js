(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/app', 'firebase/auth', 'firebase/firestore', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/app'), require('firebase/auth'), require('firebase/firestore'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['firebase/app'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'firebase/app' was not found. Please, check whether 'firebase/app' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof this['firebase/auth'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'firebase/auth' was not found. Please, check whether 'firebase/auth' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof this['firebase/firestore'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'firebase/firestore' was not found. Please, check whether 'firebase/firestore' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.kapgan:dermai'.");
    }
    root['com.kapgan:dermai'] = factory(typeof this['com.kapgan:dermai'] === 'undefined' ? {} : this['com.kapgan:dermai'], this['firebase/app'], this['firebase/auth'], this['firebase/firestore'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, $module$firebase_app_vzvknn, $module$firebase_auth_2je36k, $module$firebase_firestore_1yi9rr, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var initializeApp = $module$firebase_app_vzvknn.initializeApp;
  var getAuth = $module$firebase_auth_2je36k.getAuth;
  var getFirestore = $module$firebase_firestore_1yi9rr.getFirestore;
  var doc = $module$firebase_firestore_1yi9rr.doc;
  var updateDoc = $module$firebase_firestore_1yi9rr.updateDoc;
  var arrayUnion = $module$firebase_firestore_1yi9rr.arrayUnion;
  var collection = $module$firebase_firestore_1yi9rr.collection;
  var getDocs = $module$firebase_firestore_1yi9rr.getDocs;
  var signInWithEmailAndPassword = $module$firebase_auth_2je36k.signInWithEmailAndPassword;
  var getDoc = $module$firebase_firestore_1yi9rr.getDoc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s;
  var charArrayOf = kotlin_kotlin.$_$.e2;
  var split = kotlin_kotlin.$_$.t2;
  var copyToArray = kotlin_kotlin.$_$.e1;
  var startsWith = kotlin_kotlin.$_$.u2;
  var indexOf = kotlin_kotlin.$_$.r2;
  var ensureNotNull = kotlin_kotlin.$_$.e3;
  var to = kotlin_kotlin.$_$.i3;
  var json = kotlin_kotlin.$_$.m2;
  var THROW_CCE = kotlin_kotlin.$_$.a3;
  var Unit_instance = kotlin_kotlin.$_$.z;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var VOID = kotlin_kotlin.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CoroutineImpl = kotlin_kotlin.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.o2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.l2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l1;
  var classMeta = kotlin_kotlin.$_$.f2;
  var setMetadataFor = kotlin_kotlin.$_$.p2;
  var isBlank = kotlin_kotlin.$_$.s2;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var isArray = kotlin_kotlin.$_$.k2;
  var arrayIterator = kotlin_kotlin.$_$.c2;
  var checkIndexOverflow = kotlin_kotlin.$_$.d1;
  var joinToString = kotlin_kotlin.$_$.h1;
  var emptyList = kotlin_kotlin.$_$.f1;
  var getOrNull = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var listOf = kotlin_kotlin.$_$.i1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(main$slambda, 'main$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(main$renderDashboard$slambda, 'main$renderDashboard$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(main$renderLogin$lambda$slambda, 'main$renderLogin$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($getUserDataCOROUTINE$0, '$getUserDataCOROUTINE$0', classMeta, CoroutineImpl);
  //endregion
  function getCookie(name) {
    var nameEQ = name + '=';
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = split(document.cookie, charArrayOf([_Char___init__impl__6a9atx(59)]));
    var ca = copyToArray(this_0);
    var inductionVariable = 0;
    var last = ca.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = ca[i];
        while (startsWith(c, _Char___init__impl__6a9atx(32))) {
          // Inline function 'kotlin.text.substring' call
          var this_1 = c;
          var endIndex = c.length;
          // Inline function 'kotlin.js.asDynamic' call
          c = this_1.substring(1, endIndex);
        }
        if (indexOf(c, nameEQ) === 0) {
          // Inline function 'kotlin.text.substring' call
          var this_2 = c;
          var startIndex = nameEQ.length;
          var endIndex_0 = c.length;
          // Inline function 'kotlin.js.asDynamic' call
          return this_2.substring(startIndex, endIndex_0);
        }
      }
       while (inductionVariable <= last);
    return null;
  }
  function setCookie(name, value, days) {
    var tmp;
    if (days > 0) {
      var date = new Date();
      date.setTime(date.getTime() + imul(imul(imul(imul(days, 24), 60), 60), 1000));
      tmp = '; expires=' + date.toUTCString();
    } else {
      tmp = '';
    }
    var expires = tmp;
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  function main() {
    var root = ensureNotNull(document.getElementById('root'));
    var firebaseConfig = json([to('apiKey', 'AIzaSyDJ5amrfwWKWYy2Z7sLkKs6tDAWFgr_ekk'), to('authDomain', 'dermai-9640c.firebaseapp.com'), to('projectId', 'dermai-9640c'), to('storageBucket', 'dermai-9640c.appspot.com'), to('messagingSenderId', '1056979294284'), to('appId', '1:1056979294284:web:d66e2e1fa160b368ef7ce9'), to('measurementId', 'G-QRNBWYV5WB')]);
    var app = initializeApp(firebaseConfig);
    var auth = getAuth(app);
    var db = getFirestore(app);
    var loginHTML = {_v: '\n        <div class="col-md-6">\n                        <div class="card">\n                            <div class="card-header text-center">\n                                <h3>DermAI Panel<\/h3>\n                            <\/div>\n                            <div class="card-body">\n                                <form id="login-form">\n                                    <div class="mb-3">\n                                        <label for="emailInput" class="form-label">Email<\/label>\n                                        <input type="email" class="form-control" id="emailInput" required>\n                                    <\/div>\n                                    <div class="mb-3">\n                                        <label for="passwordInput" class="form-label">\u015Eifre<\/label>\n                                        <input type="password" class="form-control" id="passwordInput" required>\n                                    <\/div>\n                                    <button type="submit" class="btn btn-primary w-100">Giri\u015F Yap<\/button>\n                                    <p id="error-message" class="text-danger mt-3" style="display: none;"><\/p>\n                                <\/form>\n                            <\/div>\n                        <\/div>\n                    <\/div>'};
    var dashboardHTML = {_v: '<div class="row">\n                <div class="col-md-3">\n                    <div class="card mb-3">\n                        <div id="dermdiv" class="card-body text-center">\n                            <h5 id="derm-name">Y\xFCkleniyor...<\/h5>\n                            <p>Dermatolog<\/p>\n                        <\/div>\n                    <\/div>\n                <\/div>\n                <div class="col-md-9">\n                    <div id="user-list">Y\xFCkleniyor...<\/div>\n                <\/div>\n            <\/div>'};
    root.innerHTML = '<style>\n    html, body {\n        height: 100%;\n        margin: 0;\n    }\n    #page-wrapper {\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n    }\n<\/style>\n<div id="page-wrapper">\n    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">\n        <div class="container-fluid">\n            <a class="navbar-brand" href="#">Dermai<\/a>\n            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">\n                <span class="navbar-toggler-icon"><\/span>\n            <\/button>\n            <div class="collapse navbar-collapse" id="navbarNav">\n                <ul class="navbar-nav ms-auto" id="nav-links"><\/ul>\n            <\/div>\n        <\/div>\n    <\/nav>\n    <div id="main-content-area" class="flex-grow-1 container mt-5 pt-3">\n        <div id="login-container" class="d-flex justify-content-center align-items-center" style="display: none;">\n            \n        <\/div>\n       <div id="dashboard-container" style="display: none;">\n            \n        <\/div>\n    <\/div>\n    <footer class="bg-primary text-white text-center py-3 mt-auto">\n        <p>\xA9 2025 Dermai | Dermatolog Paneli<\/p>\n    <\/footer>\n<\/div>';
    var tmp = document.getElementById('login-container');
    var loginContainer = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    var tmp_0 = document.getElementById('dashboard-container');
    var dashboardContainer = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    var tmp_1 = document.getElementById('nav-links');
    var navLinks = tmp_1 instanceof HTMLElement ? tmp_1 : THROW_CCE();
    if (!(getCookie('userAuth') == null)) {
      var tmp_2 = MainScope();
      launch(tmp_2, VOID, VOID, main$slambda_0(db, loginContainer, dashboardContainer, dashboardHTML, navLinks, auth, loginHTML, null));
    } else {
      main$renderLogin(loginContainer, loginHTML, dashboardContainer, navLinks, auth, dashboardHTML, db);
    }
  }
  function getUserData(db, userUid, $completion) {
    var tmp = new $getUserDataCOROUTINE$0(db, userUid, $completion);
    tmp.a6_1 = Unit_instance;
    tmp.b6_1 = null;
    return tmp.l6();
  }
  function main$renderDashboard(loginContainer, dashboardContainer, dashboardHTML, navLinks, auth, db) {
    loginContainer.innerHTML = '';
    dashboardContainer.innerHTML = dashboardHTML._v;
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
    navLinks.innerHTML = '<li><a class="nav-link" href="#">Hastalar<\/a><\/li>\n<li><a class="nav-link" href="#">Analizler<\/a><\/li>\n<li><a class="nav-link" href="#">Yapay Zeka<\/a><\/li>\n<li><button id="logoutBtn" class="btn btn-danger btn-sm">\xC7\u0131k\u0131\u015F Yap<\/button><\/li>';
    var tmp = document.getElementById('derm-name');
    var dermNameH5 = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    var tmp_0 = document.getElementById('user-list');
    var userListDiv = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    userListDiv.textContent = 'Y\xFCkleniyor...';
    var tmp_1 = MainScope();
    launch(tmp_1, VOID, VOID, main$renderDashboard$slambda_0(auth, db, dermNameH5, userListDiv, null));
    var tmp_2 = document.getElementById('logoutBtn');
    var tmp_3 = tmp_2 instanceof HTMLButtonElement ? tmp_2 : THROW_CCE();
    tmp_3.addEventListener('click', main$renderDashboard$lambda);
  }
  function main$renderLogin(loginContainer, loginHTML, dashboardContainer, navLinks, auth, dashboardHTML, db) {
    loginContainer.innerHTML = loginHTML._v;
    dashboardContainer.innerHTML = '';
    loginContainer.style.display = 'flex';
    dashboardContainer.style.display = 'none';
    navLinks.innerHTML = '';
    var tmp = document.getElementById('login-form');
    var loginForm = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    var tmp_0 = document.getElementById('emailInput');
    var emailInput = tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE();
    var tmp_1 = document.getElementById('passwordInput');
    var passwordInput = tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE();
    var tmp_2 = document.getElementById('error-message');
    var errorMessage = tmp_2 instanceof HTMLElement ? tmp_2 : THROW_CCE();
    loginForm.addEventListener('submit', main$renderLogin$lambda(emailInput, passwordInput, auth, errorMessage, loginContainer, dashboardContainer, dashboardHTML, navLinks, db));
  }
  function main$slambda($db, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $auth, $loginHTML, resultContinuation) {
    this.vj_1 = $db;
    this.wj_1 = $loginContainer;
    this.xj_1 = $dashboardContainer;
    this.yj_1 = $dashboardHTML;
    this.zj_1 = $navLinks;
    this.ak_1 = $auth;
    this.bk_1 = $loginHTML;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).ek = function ($this$launch, $completion) {
    var tmp = this.fk($this$launch, $completion);
    tmp.a6_1 = Unit_instance;
    tmp.b6_1 = null;
    return tmp.l6();
  };
  protoOf(main$slambda).y6 = function (p1, $completion) {
    return this.ek((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).l6 = function () {
    var suspendResult = this.a6_1;
    $sm: do
      try {
        var tmp = this.y5_1;
        switch (tmp) {
          case 0:
            this.z5_1 = 5;
            this.dk_1 = getCookie('userAuth');
            if (!(this.dk_1 == null)) {
              this.z5_1 = 2;
              this.y5_1 = 1;
              suspendResult = getUserData(this.vj_1, this.dk_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              main$renderLogin(this.wj_1, this.bk_1, this.xj_1, this.zj_1, this.ak_1, this.yj_1, this.vj_1);
              this.y5_1 = 4;
              continue $sm;
            }

          case 1:
            var userData = suspendResult;
            if (userData.usertype === 'derm') {
              main$renderDashboard(this.wj_1, this.xj_1, this.yj_1, this.zj_1, this.ak_1, this.vj_1);
            } else {
              deleteCookie('userAuth');
              main$renderLogin(this.wj_1, this.bk_1, this.xj_1, this.zj_1, this.ak_1, this.yj_1, this.vj_1);
            }

            this.z5_1 = 5;
            this.y5_1 = 3;
            continue $sm;
          case 2:
            this.z5_1 = 5;
            var e = this.b6_1;
            console.error('Oturum do\u011Frulama hatas\u0131:', e);
            deleteCookie('userAuth');
            main$renderLogin(this.wj_1, this.bk_1, this.xj_1, this.zj_1, this.ak_1, this.yj_1, this.vj_1);
            this.y5_1 = 3;
            continue $sm;
          case 3:
            this.z5_1 = 5;
            this.y5_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.b6_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.z5_1 === 5) {
          throw e_0;
        } else {
          this.y5_1 = this.z5_1;
          this.b6_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(main$slambda).fk = function ($this$launch, completion) {
    var i = new main$slambda(this.vj_1, this.wj_1, this.xj_1, this.yj_1, this.zj_1, this.ak_1, this.bk_1, completion);
    i.ck_1 = $this$launch;
    return i;
  };
  function main$slambda_0($db, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $auth, $loginHTML, resultContinuation) {
    var i = new main$slambda($db, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $auth, $loginHTML, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.ek($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$renderDashboard$slambda$lambda(it) {
    return it.prediction1 + ' (Conf: ' + it.confidence + ')';
  }
  function main$renderDashboard$slambda$lambda$lambda($confirmBtn) {
    return function (it) {
      window.alert('Hastal\u0131k onayland\u0131 \u2705');
      $confirmBtn.textContent = 'Onayland\u0131';
      return Unit_instance;
    };
  }
  function main$renderDashboard$slambda$lambda$lambda_0(err) {
    console.error('Onaylama hatas\u0131:', err);
    return Unit_instance;
  }
  function main$renderDashboard$slambda$lambda_0($db, $userUid, $confirmBtn) {
    return function (it) {
      var diseaseRef = doc($db, 'userDiseaseData', $userUid);
      var promise = updateDoc(diseaseRef, json([to('isConfirmed', true)]));
      var tmp = promise.then(main$renderDashboard$slambda$lambda$lambda($confirmBtn));
      tmp.catch(main$renderDashboard$slambda$lambda$lambda_0);
      return Unit_instance;
    };
  }
  function main$renderDashboard$slambda$lambda$lambda$lambda($input, $modalEl) {
    return function (it) {
      window.alert('Yorum eklendi \uD83D\uDCAC');
      $input.value = '';
      // Inline function 'kotlin.js.asDynamic' call
      $modalEl.classList.remove('show');
      // Inline function 'kotlin.js.asDynamic' call
      $modalEl.style.display = 'none';
      return Unit_instance;
    };
  }
  function main$renderDashboard$slambda$lambda$lambda$lambda_0(err) {
    console.error('Yorum ekleme hatas\u0131:', err);
    return Unit_instance;
  }
  function main$renderDashboard$slambda$lambda$lambda_1($modalId, $db, $userUid, $modalEl) {
    return function (it) {
      var tmp = document.getElementById('commentInput-' + $modalId);
      var input = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
      var comment = input.value;
      var tmp_0;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(comment)) {
        var diseaseRef = doc($db, 'userDiseaseData', $userUid);
        var commentPromise = updateDoc(diseaseRef, json([to('comments', arrayUnion(comment))]));
        var tmp_1 = commentPromise.then(main$renderDashboard$slambda$lambda$lambda$lambda(input, $modalEl));
        tmp_1.catch(main$renderDashboard$slambda$lambda$lambda$lambda_0);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function main$renderDashboard$slambda$lambda_1($modalId, $db, $userUid) {
    return function (it) {
      var modalEl = ensureNotNull(document.getElementById($modalId));
      // Inline function 'kotlin.js.asDynamic' call
      modalEl.classList.add('show');
      // Inline function 'kotlin.js.asDynamic' call
      modalEl.style.display = 'block';
      var saveBtn = ensureNotNull(document.getElementById('saveCommentBtn-' + $modalId));
      saveBtn.addEventListener('click', main$renderDashboard$slambda$lambda$lambda_1($modalId, $db, $userUid, modalEl), false);
      return Unit_instance;
    };
  }
  function main$renderDashboard$slambda($auth, $db, $dermNameH5, $userListDiv, resultContinuation) {
    this.ok_1 = $auth;
    this.pk_1 = $db;
    this.qk_1 = $dermNameH5;
    this.rk_1 = $userListDiv;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$renderDashboard$slambda).ek = function ($this$launch, $completion) {
    var tmp = this.fk($this$launch, $completion);
    tmp.a6_1 = Unit_instance;
    tmp.b6_1 = null;
    return tmp.l6();
  };
  protoOf(main$renderDashboard$slambda).y6 = function (p1, $completion) {
    return this.ek((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$renderDashboard$slambda).l6 = function () {
    var suspendResult = this.a6_1;
    $sm: do
      try {
        var tmp = this.y5_1;
        switch (tmp) {
          case 0:
            this.z5_1 = 13;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.ok_1.currentUser;
            tmp_0.tk_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uid;
            if (this.tk_1 != null) {
              this.y5_1 = 1;
              suspendResult = getUserData(this.pk_1, this.tk_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.qk_1.textContent = 'Kullan\u0131c\u0131 Bulunamad\u0131';
              this.y5_1 = 2;
              continue $sm;
            }

          case 1:
            this.uk_1 = suspendResult;
            if (this.uk_1.usertype === 'derm') {
              this.qk_1.textContent = this.uk_1.name + ' ' + this.uk_1.surname;
            } else {
              this.qk_1.textContent = 'Kullan\u0131c\u0131 Tipi: ' + this.uk_1.usertype;
            }

            this.y5_1 = 2;
            continue $sm;
          case 2:
            this.z5_1 = 11;
            this.rk_1.innerHTML = '';
            this.vk_1 = collection(this.pk_1, 'users');
            this.y5_1 = 3;
            suspendResult = await_0(getDocs(this.vk_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.wk_1 = suspendResult;
            var tmp_1 = this;
            var tmp_2 = this.wk_1.docs;
            tmp_1.xk_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
            var tmp_3 = this;
            tmp_3.yk_1 = this.xk_1;
            this.zk_1 = arrayIterator(this.yk_1);
            this.y5_1 = 4;
            continue $sm;
          case 4:
            if (!this.zk_1.t()) {
              this.y5_1 = 10;
              continue $sm;
            }

            this.al_1 = this.zk_1.u();
            this.y5_1 = 5;
            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.cl_1 = this.al_1;
            var tmp_5 = this;
            var tmp_6 = this.cl_1.id;
            tmp_5.dl_1 = (!(tmp_6 == null) ? typeof tmp_6 === 'string' : false) ? tmp_6 : THROW_CCE();
            this.y5_1 = 6;
            suspendResult = getUserData(this.pk_1, this.dl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var user = suspendResult;
            if (user.diseases.p()) {
              this.bl_1 = Unit_instance;
              this.y5_1 = 9;
              continue $sm;
            } else {
              this.y5_1 = 7;
              continue $sm;
            }

          case 7:
            if (user.usertype === 'derm') {
              this.bl_1 = Unit_instance;
              this.y5_1 = 9;
              continue $sm;
            } else {
              this.y5_1 = 8;
              continue $sm;
            }

          case 8:
            var cardDiv = document.createElement('div');
            cardDiv.setAttribute('class', 'card mb-3');
            var cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            var h5 = document.createElement('h5');
            h5.textContent = user.name + ' ' + user.surname;
            cardBody.appendChild(h5);
            var index = 0;
            var tmp0_iterator = user.diseases.m();
            while (tmp0_iterator.t()) {
              var item = tmp0_iterator.u();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              var index_0 = checkIndexOverflow(tmp1);
              var p = document.createElement('p');
              var tmp_7 = item.date;
              var tmp_8 = joinToString(item.description);
              var tmp_9 = item.diagnosis;
              p.textContent = tmp_7 + ': ' + tmp_8 + ' -> Tahmin: ' + joinToString(tmp_9, VOID, VOID, VOID, VOID, VOID, main$renderDashboard$slambda$lambda);
              cardBody.appendChild(p);
              var indexedObject = item.imagePaths;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var element = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var img = document.createElement('img');
                img.setAttribute('src', element);
                img.setAttribute('alt', 'analiz');
                img.setAttribute('class', 'img-fluid rounded mb-2 d-block');
                cardBody.appendChild(img);
                var btnGroup = document.createElement('div');
                btnGroup.setAttribute('class', 'd-flex gap-2 mb-3');
                var confirmBtn = document.createElement('button');
                confirmBtn.setAttribute('class', 'btn btn-success btn-sm');
                confirmBtn.textContent = item.isConfirmed ? 'Onayland\u0131' : 'Onayla';
                confirmBtn.addEventListener('click', main$renderDashboard$slambda$lambda_0(this.pk_1, this.dl_1, confirmBtn));
                var commentBtn = document.createElement('button');
                commentBtn.setAttribute('class', 'btn btn-primary btn-sm');
                commentBtn.textContent = 'Yorum';
                var modalId = 'commentModal-' + this.dl_1 + '-' + index_0;
                ensureNotNull(document.body).insertAdjacentHTML('beforeend', '\n                                    <div class="modal fade" id="' + modalId + '" tabindex="-1" aria-labelledby="' + modalId + 'Label" aria-hidden="true">\n                                      <div class="modal-dialog">\n                                        <div class="modal-content">\n                                          <div class="modal-header">\n                                            <h5 class="modal-title" id="' + modalId + 'Label">Yorum Yaz<\/h5>\n                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"><\/button>\n                                          <\/div>\n                                          <div class="modal-body">\n                                            <textarea class="form-control" id="commentInput-' + modalId + '" rows="3" placeholder="Yorumunuzu yaz\u0131n..."><\/textarea>\n                                          <\/div>\n                                          <div class="modal-footer">\n                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">\u0130ptal<\/button>\n                                            <button type="button" class="btn btn-primary" id="saveCommentBtn-' + modalId + '">Kaydet<\/button>\n                                          <\/div>\n                                        <\/div>\n                                      <\/div>\n                                    <\/div>\n                                    ');
                commentBtn.addEventListener('click', main$renderDashboard$slambda$lambda_1(modalId, this.pk_1, this.dl_1));
                btnGroup.appendChild(confirmBtn);
                btnGroup.appendChild(commentBtn);
                cardBody.appendChild(btnGroup);
              }
            }

            cardDiv.appendChild(cardBody);
            this.rk_1.appendChild(cardDiv);
            if (false) {
              this.y5_1 = 5;
              continue $sm;
            }

            this.y5_1 = 9;
            continue $sm;
          case 9:
            this.y5_1 = 4;
            continue $sm;
          case 10:
            this.z5_1 = 13;
            this.y5_1 = 12;
            continue $sm;
          case 11:
            this.z5_1 = 13;
            var e = this.b6_1;
            console.error('Veri \xE7ekme hatas\u0131:', e);
            this.rk_1.textContent = 'Veri \xE7ekilemedi.';
            this.y5_1 = 12;
            continue $sm;
          case 12:
            this.z5_1 = 13;
            return Unit_instance;
          case 13:
            throw this.b6_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.z5_1 === 13) {
          throw e_0;
        } else {
          this.y5_1 = this.z5_1;
          this.b6_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(main$renderDashboard$slambda).fk = function ($this$launch, completion) {
    var i = new main$renderDashboard$slambda(this.ok_1, this.pk_1, this.qk_1, this.rk_1, completion);
    i.sk_1 = $this$launch;
    return i;
  };
  function main$renderDashboard$slambda_0($auth, $db, $dermNameH5, $userListDiv, resultContinuation) {
    var i = new main$renderDashboard$slambda($auth, $db, $dermNameH5, $userListDiv, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.ek($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$renderDashboard$lambda(it) {
    deleteCookie('userAuth');
    window.location.reload();
    return Unit_instance;
  }
  function main$renderLogin$lambda$slambda($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, resultContinuation) {
    this.ml_1 = $emailInput;
    this.nl_1 = $passwordInput;
    this.ol_1 = $auth;
    this.pl_1 = $errorMessage;
    this.ql_1 = $loginContainer;
    this.rl_1 = $dashboardContainer;
    this.sl_1 = $dashboardHTML;
    this.tl_1 = $navLinks;
    this.ul_1 = $db;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$renderLogin$lambda$slambda).ek = function ($this$launch, $completion) {
    var tmp = this.fk($this$launch, $completion);
    tmp.a6_1 = Unit_instance;
    tmp.b6_1 = null;
    return tmp.l6();
  };
  protoOf(main$renderLogin$lambda$slambda).y6 = function (p1, $completion) {
    return this.ek((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$renderLogin$lambda$slambda).l6 = function () {
    var suspendResult = this.a6_1;
    $sm: do
      try {
        var tmp = this.y5_1;
        switch (tmp) {
          case 0:
            this.z5_1 = 3;
            this.z5_1 = 2;
            this.wl_1 = this.ml_1.value;
            this.xl_1 = this.nl_1.value;
            this.y5_1 = 1;
            suspendResult = await_0(signInWithEmailAndPassword(this.ol_1, this.wl_1, this.xl_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            setCookie('userAuth', result.user.uid, 7);
            main$renderDashboard(this.ql_1, this.rl_1, this.sl_1, this.tl_1, this.ol_1, this.ul_1);
            this.z5_1 = 3;
            this.y5_1 = 4;
            continue $sm;
          case 2:
            this.z5_1 = 3;
            var e = this.b6_1;
            this.pl_1.textContent = 'Giri\u015F ba\u015Far\u0131s\u0131z: ' + e.message;
            this.pl_1.style.display = 'block';
            console.error('Giri\u015F hatas\u0131:', e);
            this.y5_1 = 4;
            continue $sm;
          case 3:
            throw this.b6_1;
          case 4:
            this.z5_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.z5_1 === 3) {
          throw e_0;
        } else {
          this.y5_1 = this.z5_1;
          this.b6_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(main$renderLogin$lambda$slambda).fk = function ($this$launch, completion) {
    var i = new main$renderLogin$lambda$slambda(this.ml_1, this.nl_1, this.ol_1, this.pl_1, this.ql_1, this.rl_1, this.sl_1, this.tl_1, this.ul_1, completion);
    i.vl_1 = $this$launch;
    return i;
  };
  function main$renderLogin$lambda$slambda_0($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, resultContinuation) {
    var i = new main$renderLogin$lambda$slambda($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.ek($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$renderLogin$lambda($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db) {
    return function (event) {
      event.preventDefault();
      var tmp = MainScope();
      launch(tmp, VOID, VOID, main$renderLogin$lambda$slambda_0($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, null));
      return Unit_instance;
    };
  }
  function $getUserDataCOROUTINE$0(db, userUid, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dj_1 = db;
    this.ej_1 = userUid;
  }
  protoOf($getUserDataCOROUTINE$0).l6 = function () {
    var suspendResult = this.a6_1;
    $sm: do
      try {
        var tmp = this.y5_1;
        switch (tmp) {
          case 0:
            this.z5_1 = 3;
            this.fj_1 = doc(this.dj_1, 'users', this.ej_1);
            this.y5_1 = 1;
            suspendResult = await_0(getDoc(this.fj_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.gj_1 = suspendResult;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.gj_1.data();
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              tmp_1 = {};
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.hj_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.hj_1.name;
            var tmp1_elvis_lhs = (!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : null;
            tmp_2.ij_1 = tmp1_elvis_lhs == null ? 'NULL' : tmp1_elvis_lhs;
            var tmp_4 = this;
            var tmp_5 = this.hj_1.surname;
            var tmp2_elvis_lhs = (!(tmp_5 == null) ? typeof tmp_5 === 'string' : false) ? tmp_5 : null;
            tmp_4.jj_1 = tmp2_elvis_lhs == null ? 'NULL' : tmp2_elvis_lhs;
            var tmp_6 = this;
            var tmp_7 = this.hj_1.userType;
            var tmp3_elvis_lhs = (!(tmp_7 == null) ? typeof tmp_7 === 'string' : false) ? tmp_7 : null;
            tmp_6.kj_1 = tmp3_elvis_lhs == null ? 'patient' : tmp3_elvis_lhs;
            var tmp_8 = this;
            var tmp_9 = this.hj_1.date;
            var tmp4_elvis_lhs = (!(tmp_9 == null) ? typeof tmp_9 === 'string' : false) ? tmp_9 : null;
            tmp_8.lj_1 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
            this.mj_1 = doc(this.dj_1, 'userDiseaseData', this.ej_1);
            this.y5_1 = 2;
            suspendResult = await_0(getDoc(this.mj_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var diseaseSnap = suspendResult;
            var diseaseData = diseaseSnap.data();
            var tmp_10;
            if (diseaseData != null) {
              var tmp_11 = diseaseData['dates'];
              var tmp5_elvis_lhs = (!(tmp_11 == null) ? isArray(tmp_11) : false) ? tmp_11 : null;
              var tmp_12;
              if (tmp5_elvis_lhs == null) {
                tmp_12 = [];
              } else {
                tmp_12 = tmp5_elvis_lhs;
              }
              var dates = tmp_12;
              var tmp_13 = diseaseData['description'];
              var tmp6_elvis_lhs = (!(tmp_13 == null) ? isArray(tmp_13) : false) ? tmp_13 : null;
              var tmp_14;
              if (tmp6_elvis_lhs == null) {
                tmp_14 = [];
              } else {
                tmp_14 = tmp6_elvis_lhs;
              }
              var desc = tmp_14;
              var tmp_15 = diseaseData['diagnosis'];
              var tmp7_elvis_lhs = (!(tmp_15 == null) ? isArray(tmp_15) : false) ? tmp_15 : null;
              var tmp_16;
              if (tmp7_elvis_lhs == null) {
                tmp_16 = [];
              } else {
                tmp_16 = tmp7_elvis_lhs;
              }
              var diagArray = tmp_16;
              var tmp_17 = diseaseData['image_paths'];
              var tmp8_elvis_lhs = (!(tmp_17 == null) ? isArray(tmp_17) : false) ? tmp_17 : null;
              var tmp_18;
              if (tmp8_elvis_lhs == null) {
                tmp_18 = [];
              } else {
                tmp_18 = tmp8_elvis_lhs;
              }
              var imgPaths = tmp_18;
              var tmp_19 = diseaseData['user_id'];
              var tmp9_elvis_lhs = (!(tmp_19 == null) ? typeof tmp_19 === 'string' : false) ? tmp_19 : null;
              var userId = tmp9_elvis_lhs == null ? this.ej_1 : tmp9_elvis_lhs;
              var tmp_20 = diseaseData['isConfirmed'];
              var tmp10_elvis_lhs = (!(tmp_20 == null) ? typeof tmp_20 === 'boolean' : false) ? tmp_20 : null;
              var isConfirmed = tmp10_elvis_lhs == null ? false : tmp10_elvis_lhs;
              var tmp_21 = diseaseData['comments'];
              var tmp11_elvis_lhs = (!(tmp_21 == null) ? isArray(tmp_21) : false) ? tmp_21 : null;
              var tmp_22;
              if (tmp11_elvis_lhs == null) {
                tmp_22 = [];
              } else {
                tmp_22 = tmp11_elvis_lhs;
              }
              var comments = tmp_22;
              var this_0 = {};
              var tmp0_elvis_lhs_0 = getOrNull(dates, 0);
              this_0.date = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
              this_0.description = desc;
              var destination = ArrayList_init_$Create$(diagArray.length);
              var inductionVariable = 0;
              var last = diagArray.length;
              while (inductionVariable < last) {
                var item = diagArray[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var this_1 = {};
                var tmp_23 = item.confidence;
                var tmp0_elvis_lhs_1 = (!(tmp_23 == null) ? typeof tmp_23 === 'string' : false) ? tmp_23 : null;
                this_1.confidence = tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1;
                var tmp_24 = item.prediction1;
                var tmp1_elvis_lhs_0 = (!(tmp_24 == null) ? typeof tmp_24 === 'string' : false) ? tmp_24 : null;
                this_1.prediction1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
                var tmp_25 = item.prediction2;
                var tmp2_elvis_lhs_0 = (!(tmp_25 == null) ? typeof tmp_25 === 'string' : false) ? tmp_25 : null;
                this_1.prediction2 = tmp2_elvis_lhs_0 == null ? '' : tmp2_elvis_lhs_0;
                var tmp_26 = item.prediction3;
                var tmp3_elvis_lhs_0 = (!(tmp_26 == null) ? typeof tmp_26 === 'string' : false) ? tmp_26 : null;
                this_1.prediction3 = tmp3_elvis_lhs_0 == null ? '' : tmp3_elvis_lhs_0;
                destination.j(this_1);
              }
              this_0.diagnosis = copyToArray(destination);
              this_0.imagePaths = imgPaths;
              this_0.userId = userId;
              this_0.isConfirmed = isConfirmed;
              this_0.comments = comments;
              tmp_10 = listOf(this_0);
            } else {
              tmp_10 = emptyList();
            }

            var diseases = tmp_10;
            var this_2 = {};
            this_2.uid = this.ej_1;
            this_2.name = this.ij_1;
            this_2.surname = this.jj_1;
            this_2.usertype = this.kj_1;
            this_2.date = this.lj_1;
            this_2.diseases = diseases;
            return this_2;
          case 3:
            throw this.b6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z5_1 === 3) {
          throw e;
        } else {
          this.y5_1 = this.z5_1;
          this.b6_1 = e;
        }
      }
     while (true);
  };
  main();
  return _;
}));

//# sourceMappingURL=dermai.js.map
