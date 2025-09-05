(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/app', 'firebase/auth', 'firebase/firestore', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/app'), require('firebase/auth'), require('firebase/firestore'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof globalThis['firebase/app'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'firebase/app' was not found. Please, check whether 'firebase/app' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof globalThis['firebase/auth'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'firebase/auth' was not found. Please, check whether 'firebase/auth' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof globalThis['firebase/firestore'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'firebase/firestore' was not found. Please, check whether 'firebase/firestore' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.kapgan:dermai'.");
    }
    if (typeof globalThis['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.kapgan:dermai'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.kapgan:dermai'.");
    }
    globalThis['com.kapgan:dermai'] = factory(typeof globalThis['com.kapgan:dermai'] === 'undefined' ? {} : globalThis['com.kapgan:dermai'], globalThis['firebase/app'], globalThis['firebase/auth'], globalThis['firebase/firestore'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(function (_, $module$firebase_app_vzvknn, $module$firebase_auth_2je36k, $module$firebase_firestore_1yi9rr, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
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
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.b1;
  var charArrayOf = kotlin_kotlin.$_$.o3;
  var split = kotlin_kotlin.$_$.u4;
  var copyToArray = kotlin_kotlin.$_$.x1;
  var startsWith = kotlin_kotlin.$_$.w4;
  var substring = kotlin_kotlin.$_$.x4;
  var indexOf = kotlin_kotlin.$_$.r4;
  var ensureNotNull = kotlin_kotlin.$_$.o5;
  var to = kotlin_kotlin.$_$.t5;
  var json = kotlin_kotlin.$_$.f4;
  var THROW_CCE = kotlin_kotlin.$_$.j5;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var VOID = kotlin_kotlin.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Unit_getInstance = kotlin_kotlin.$_$.k1;
  var CoroutineImpl = kotlin_kotlin.$_$.h3;
  var protoOf = kotlin_kotlin.$_$.i4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.d4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p2;
  var initMetadataForLambda = kotlin_kotlin.$_$.a4;
  var toDouble = kotlin_kotlin.$_$.y4;
  var round = kotlin_kotlin.$_$.l4;
  var isBlank = kotlin_kotlin.$_$.s4;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var isArray = kotlin_kotlin.$_$.c4;
  var arrayIterator = kotlin_kotlin.$_$.m3;
  var checkIndexOverflow = kotlin_kotlin.$_$.v1;
  var split_0 = kotlin_kotlin.$_$.v4;
  var joinToString = kotlin_kotlin.$_$.d2;
  var emptyList = kotlin_kotlin.$_$.y1;
  var getOrNull = kotlin_kotlin.$_$.b2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var listOf = kotlin_kotlin.$_$.e2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.y3;
  var SuspendFunction1 = kotlin_kotlin.$_$.i3;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(main$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(main$renderDashboard$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(main$renderLogin$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($getUserDataCOROUTINE$, CoroutineImpl);
  //endregion
  function get_USER_AUTH_COOKIE() {
    return USER_AUTH_COOKIE;
  }
  var USER_AUTH_COOKIE;
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
        while (startsWith(c, _Char___init__impl__6a9atx(32)))
          c = substring(c, 1, c.length);
        if (indexOf(c, nameEQ) === 0) {
          return substring(c, nameEQ.length, c.length);
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
    var loginHTML = '\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header text-center">\n                    <h3>DermAI Panel<\/h3>\n                <\/div>\n                <div class="card-body">\n                    <form id="login-form">\n                        <div class="mb-3">\n                            <label for="emailInput" class="form-label">Email<\/label>\n                            <input type="email" class="form-control" id="emailInput" required>\n                        <\/div>\n                        <div class="mb-3">\n                            <label for="passwordInput" class="form-label">\u015Eifre<\/label>\n                            <input type="password" class="form-control" id="passwordInput" required>\n                        <\/div>\n                        <button type="submit" class="btn btn-primary w-100 dermai-color">Giri\u015F Yap<\/button>\n                        <p id="error-message" class="text-danger mt-3" style="display: none;"><\/p>\n                    <\/form>\n                <\/div>\n            <\/div>\n        <\/div>';
    var dashboardHTML = '<div class="row">\n    <div class="col-md-3">\n        <div class="card mb-3">\n            <div id="dermdiv" class="card-body text-center">\n                <img src="user.svg" alt="user"/>\n                <h5 id="derm-name">Y\xFCkleniyor...<\/h5>\n                <p>Dermatolog<\/p>\n            <\/div>\n        <\/div>\n    <\/div>\n    <div class="col-md-9">\n        <div id="user-list">Y\xFCkleniyor...<\/div>\n    <\/div>\n<\/div>';
    root.innerHTML = '<style>\n    html, body { height: 100%; margin: 0; }\n    #page-wrapper { min-height: 100vh; display: flex; flex-direction: column; }\n    .disease-container { display: flex; gap: 20px; margin-bottom: 20px; align-items: flex-start; }\n    .disease-info { flex: 1; }\n    .disease-image { flex-shrink: 0; max-width: 300px; }\n    .user-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }\n    .user-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }\n    .user-name { margin: 0; font-size: 1.2rem; }\n    .user-info-side { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 15px; }\n    .user-details { flex: 1; }\n    .date-time-container { position: absolute; top: 15px; right: 15px; text-align: right; }\n    .date-text { font-size: 0.9rem; font-weight: bold; color: #6c757d; margin: 0; }\n    .time-text { font-size: 0.8rem; color: #6c757d; margin: 0; }\n    .disease-card { position: relative; }\n\n    /* Navbar ve Footer rengini \xF6zelle\u015Ftir */\n    .navbar, footer {\n        background-color: #C7FFFD !important;\n    }\n    .navbar .navbar-brand, \n    .navbar .nav-link, \n    footer p {\n        color: #000 !important;\n    }\n\n    @media (max-width: 768px) {\n        .disease-container { flex-direction: column; }\n        .disease-image { max-width: 100%; }\n        .user-header { flex-direction: column; text-align: center; }\n        .user-info-side { flex-direction: column; }\n        .date-time-container { position: static; text-align: left; margin-bottom: 10px; }\n    }\n    .dermai-color{\n       background: linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0);\n    }\n    .dermai-color-btn-f{\n        background: #4CAF50;\n    }\n    .dermai-color-btn-t{\n        background: #9C27B0;\n    }\n    .dermai-color-btn-s{\n        background: #2196F3;\n    }\n<\/style>\n<div id="page-wrapper">\n    <nav class="navbar navbar-expand-lg navbar-dark dermai-color">\n        <div class="container-fluid">\n            <img src="logo.svg" alt="dermai" height="80px" />\n            <a class="navbar-brand" href="#"><img src="dermai.svg" alt="dermai" height="40px"/><\/a>\n            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">\n                <span class="navbar-toggler-icon"><\/span>\n            <\/button>\n            <div class="collapse navbar-collapse" id="navbarNav">\n                <ul class="navbar-nav ms-auto" id="nav-links"><\/ul>\n            <\/div>\n        <\/div>\n    <\/nav>\n    <div id="main-content-area" class="flex-grow-1 container mt-5 pt-3">\n        <div id="login-container" class="d-flex justify-content-center align-items-center" style="display: none;"><\/div>\n        <div id="dashboard-container" style="display: none;"><\/div>\n    <\/div>\n    <footer class="text-center py-3 mt-auto dermai-color">\n        <p>\xA9 2025 Dermai | Dermatolog Paneli<\/p>\n    <\/footer>\n<\/div>';
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
    var tmp = new $getUserDataCOROUTINE$(db, userUid, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function main$renderDashboard(loginContainer, dashboardContainer, dashboardHTML, navLinks, auth, db) {
    loginContainer.innerHTML = '';
    dashboardContainer.innerHTML = dashboardHTML;
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
    navLinks.innerHTML = '<li><button  id="logoutBtn" class="nav-link"><img src="exit.svg" height="55px"/><\/button><\/li>';
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
    loginContainer.innerHTML = loginHTML;
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
    this.$db_1 = $db;
    this.$loginContainer_1 = $loginContainer;
    this.$dashboardContainer_1 = $dashboardContainer;
    this.$dashboardHTML_1 = $dashboardHTML;
    this.$navLinks_1 = $navLinks;
    this.$auth_1 = $auth;
    this.$loginHTML_1 = $loginHTML;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.userUid0__1 = getCookie('userAuth');
            if (!(this.userUid0__1 == null)) {
              this.set_exceptionState_fex74n_k$(2);
              this.set_state_rjd8d0_k$(1);
              suspendResult = getUserData(this.$db_1, this.userUid0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              main$renderLogin(this.$loginContainer_1, this.$loginHTML_1, this.$dashboardContainer_1, this.$navLinks_1, this.$auth_1, this.$dashboardHTML_1, this.$db_1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 1:
            var userData = suspendResult;
            if (userData.usertype === 'derm') {
              main$renderDashboard(this.$loginContainer_1, this.$dashboardContainer_1, this.$dashboardHTML_1, this.$navLinks_1, this.$auth_1, this.$db_1);
            } else {
              deleteCookie('userAuth');
              main$renderLogin(this.$loginContainer_1, this.$loginHTML_1, this.$dashboardContainer_1, this.$navLinks_1, this.$auth_1, this.$dashboardHTML_1, this.$db_1);
            }

            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(5);
            var e = this.get_exception_x0n6w6_k$();
            console.error('Oturum do\u011Frulama hatas\u0131:', e);
            deleteCookie('userAuth');
            main$renderLogin(this.$loginContainer_1, this.$loginHTML_1, this.$dashboardContainer_1, this.$navLinks_1, this.$auth_1, this.$dashboardHTML_1, this.$db_1);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(main$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new main$slambda(this.$db_1, this.$loginContainer_1, this.$dashboardContainer_1, this.$dashboardHTML_1, this.$navLinks_1, this.$auth_1, this.$loginHTML_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(main$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function main$slambda_0($db, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $auth, $loginHTML, resultContinuation) {
    var i = new main$slambda($db, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $auth, $loginHTML, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$renderDashboard$slambda$lambda(it) {
    return it.prediction1;
  }
  function main$renderDashboard$slambda$lambda_0(it) {
    return '' + round(toDouble(it.confidence) / 10) * 10;
  }
  function main$renderDashboard$slambda$lambda$lambda($confirmBtn) {
    return function (it) {
      window.alert('Hastal\u0131k onayland\u0131 \u2705');
      $confirmBtn.textContent = 'Onayland\u0131';
      $confirmBtn.setAttribute('disabled', 'true');
      return Unit_getInstance();
    };
  }
  function main$renderDashboard$slambda$lambda$lambda_0(err) {
    console.error('Onaylama hatas\u0131:', err);
    return Unit_getInstance();
  }
  function main$renderDashboard$slambda$lambda_1($db, $userUid, $confirmBtn) {
    return function (_unused_var__etf5q3) {
      var diseaseRef = doc($db, 'userDiseaseData', $userUid);
      var promise = updateDoc(diseaseRef, json([to('isConfirmed', true)]));
      var tmp = promise.then(main$renderDashboard$slambda$lambda$lambda($confirmBtn));
      tmp.catch(main$renderDashboard$slambda$lambda$lambda_0);
      return Unit_getInstance();
    };
  }
  function main$renderDashboard$slambda$lambda$lambda$lambda($input, $modal) {
    return function (it) {
      window.alert('Yorum eklendi \uD83D\uDCAC');
      $input.value = '';
      return $modal.hide();
    };
  }
  function main$renderDashboard$slambda$lambda$lambda$lambda_0(err) {
    console.error('Yorum ekleme hatas\u0131:', err);
    return Unit_getInstance();
  }
  function main$renderDashboard$slambda$lambda$lambda_1($modalId, $db, $userUid, $modal) {
    return function (_unused_var__etf5q3) {
      var tmp = document.getElementById('commentInput-' + $modalId);
      var input = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
      var comment = input.value;
      var tmp_0;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(comment)) {
        var diseaseRef = doc($db, 'userDiseaseData', $userUid);
        var commentPromise = updateDoc(diseaseRef, json([to('comments', arrayUnion(comment))]));
        var tmp_1 = commentPromise.then(main$renderDashboard$slambda$lambda$lambda$lambda(input, $modal));
        tmp_1.catch(main$renderDashboard$slambda$lambda$lambda$lambda_0);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function main$renderDashboard$slambda$lambda_2($modalId, $db, $userUid) {
    return function (_unused_var__etf5q3) {
      var modalEl = ensureNotNull(document.getElementById($modalId));
      var modal = new bootstrap.Modal(modalEl);
      modal.show();
      var saveBtn = ensureNotNull(document.getElementById('saveCommentBtn-' + $modalId));
      var tmp = main$renderDashboard$slambda$lambda$lambda_1($modalId, $db, $userUid, modal);
      // Inline function 'kotlinext.js.jsObject' call
      // Inline function 'kotlinext.js.jsObject' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.once = true;
      saveBtn.addEventListener('click', tmp, this_0);
      return Unit_getInstance();
    };
  }
  function main$renderDashboard$slambda($auth, $db, $dermNameH5, $userListDiv, resultContinuation) {
    this.$auth_1 = $auth;
    this.$db_1 = $db;
    this.$dermNameH5__1 = $dermNameH5;
    this.$userListDiv_1 = $userListDiv;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$renderDashboard$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$renderDashboard$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$renderDashboard$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(12);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.$auth_1.currentUser;
            tmp_0.userUid0__1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uid;
            if (this.userUid0__1 != null) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = getUserData(this.$db_1, this.userUid0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.$dermNameH5__1.textContent = 'Kullan\u0131c\u0131 Bulunamad\u0131';
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.loggedInUser1__1 = suspendResult;
            this.$dermNameH5__1.textContent = this.loggedInUser1__1.usertype === 'derm' ? this.loggedInUser1__1.name + ' ' + this.loggedInUser1__1.surname : 'Kullan\u0131c\u0131 Tipi: ' + this.loggedInUser1__1.usertype;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(10);
            this.$userListDiv_1.innerHTML = '';
            this.usersCol2__1 = collection(this.$db_1, 'users');
            this.set_state_rjd8d0_k$(3);
            suspendResult = await_0(getDocs(this.usersCol2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.usersSnap3__1 = suspendResult;
            var tmp_1 = this;
            var tmp_2 = this.usersSnap3__1.docs;
            tmp_1.userDocs4__1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
            var tmp_3 = this;
            tmp_3.tmp05__1 = this.userDocs4__1;
            this.this6__1 = this.tmp05__1;
            this._iterator_7_yqohr7__1 = arrayIterator(this.this6__1);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!this._iterator_7_yqohr7__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            this.element8__1 = this._iterator_7_yqohr7__1.next_20eer_k$();
            var tmp_4 = this;
            tmp_4.tmp09__1 = this.element8__1;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.doc11__1 = this.tmp09__1;
            var tmp_5 = this;
            var tmp_6 = this.doc11__1.id;
            tmp_5.userUid12__1 = (!(tmp_6 == null) ? typeof tmp_6 === 'string' : false) ? tmp_6 : THROW_CCE();
            this.set_state_rjd8d0_k$(6);
            suspendResult = getUserData(this.$db_1, this.userUid12__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var user = suspendResult;
            if (user.diseases.isEmpty_y1axqb_k$() || user.usertype === 'derm') {
              this.tmp$ret$010__1 = Unit_getInstance();
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 7:
            var cardDiv = document.createElement('div');
            cardDiv.setAttribute('class', 'card mb-4 disease-card');
            var cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            var index = 0;
            var _iterator__ex2g4s = user.diseases.iterator_jk1svi_k$();
            while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
              var item = _iterator__ex2g4s.next_20eer_k$();
              var _unary__edvuaz = index;
              index = _unary__edvuaz + 1 | 0;
              var index_0 = checkIndexOverflow(_unary__edvuaz);
              var dateTimeParts = split_0(item.date, [' ']);
              var date = new Date(item.date);
              var tmp_7;
              if (!dateTimeParts.isEmpty_y1axqb_k$()) {
                tmp_7 = '' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
              } else {
                tmp_7 = '';
              }
              var datePart = tmp_7;
              var timePart = dateTimeParts.get_size_woubt6_k$() > 1 ? '' + date.getHours() + ':' + date.getMinutes() : '';
              var dateTimeContainer = document.createElement('div');
              dateTimeContainer.setAttribute('class', 'date-time-container');
              var dateText = document.createElement('p');
              dateText.setAttribute('class', 'date-text');
              dateText.textContent = datePart;
              dateTimeContainer.appendChild(dateText);
              var timeText = document.createElement('p');
              timeText.setAttribute('class', 'time-text');
              timeText.textContent = timePart;
              dateTimeContainer.appendChild(timeText);
              cardBody.appendChild(dateTimeContainer);
              var diseaseContainer = document.createElement('div');
              diseaseContainer.setAttribute('class', 'disease-container');
              var userInfoSide = document.createElement('div');
              userInfoSide.setAttribute('class', 'user-info-side');
              var imageColumn = document.createElement('div');
              imageColumn.setAttribute('class', 'disease-image');
              var indexedObject = item.imagePaths;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var element = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var img = document.createElement('img');
                img.setAttribute('src', element);
                img.setAttribute('alt', 'Cilt analizi');
                img.setAttribute('class', 'img-fluid rounded shadow mb-2');
                img.setAttribute('style', 'max-width: 100%; height: auto;');
                imageColumn.appendChild(img);
              }
              userInfoSide.appendChild(imageColumn);
              var userDetails = document.createElement('div');
              userDetails.setAttribute('class', 'user-details');
              var userNameDiv = document.createElement('div');
              userNameDiv.setAttribute('class', 'user-header');
              var avatarImg = document.createElement('img');
              avatarImg.setAttribute('src', 'user.svg');
              avatarImg.setAttribute('alt', 'Kullan\u0131c\u0131');
              avatarImg.setAttribute('class', 'user-avatar');
              userNameDiv.appendChild(avatarImg);
              var userName = document.createElement('h5');
              userName.setAttribute('class', 'user-name');
              userName.textContent = user.name + ' ' + user.surname;
              userNameDiv.appendChild(userName);
              userDetails.appendChild(userNameDiv);
              var diseaseInfo = document.createElement('div');
              diseaseInfo.setAttribute('class', 'disease-info');
              var descPara = document.createElement('p');
              descPara.setAttribute('class', 'mb-2');
              descPara.innerHTML = '<strong>A\xE7\u0131klama:<\/strong> ' + joinToString(item.description);
              diseaseInfo.appendChild(descPara);
              var diagPara = document.createElement('p');
              diagPara.setAttribute('class', 'mb-3');
              var tmp_8 = item.diagnosis;
              diagPara.innerHTML = '<strong>Tahmin:<\/strong> ' + joinToString(tmp_8, VOID, VOID, VOID, VOID, VOID, main$renderDashboard$slambda$lambda);
              diseaseInfo.appendChild(diagPara);
              var confPara = document.createElement('p');
              confPara.setAttribute('class', 'mb-3');
              var tmp_9 = item.diagnosis;
              confPara.innerHTML = '<strong>Do\u011Fruluk:<\/strong> %' + joinToString(tmp_9, VOID, VOID, VOID, VOID, VOID, main$renderDashboard$slambda$lambda_0);
              diseaseInfo.appendChild(confPara);
              var btnGroup = document.createElement('div');
              btnGroup.setAttribute('class', 'd-flex gap-2 mb-3');
              var confirmBtn = document.createElement('button');
              confirmBtn.setAttribute('class', 'btn dermai-color-btn-f btn-sm');
              confirmBtn.textContent = item.isConfirmed ? 'Onayland\u0131' : 'Onayla';
              if (item.isConfirmed) {
                confirmBtn.setAttribute('disabled', 'true');
              }
              confirmBtn.addEventListener('click', main$renderDashboard$slambda$lambda_1(this.$db_1, this.userUid12__1, confirmBtn));
              var commentBtn = document.createElement('button');
              commentBtn.setAttribute('class', 'btn dermai-color-btn-s btn-sm');
              commentBtn.textContent = 'Yorum Ekle';
              var modalId = 'commentModal-' + this.userUid12__1 + '-' + index_0;
              ensureNotNull(document.body).insertAdjacentHTML('beforeend', '\n                            <div class="modal fade" id="' + modalId + '" tabindex="-1" aria-labelledby="' + modalId + 'Label" aria-hidden="true">\n                              <div class="modal-dialog">\n                                <div class="modal-content">\n                                  <div class="modal-header">\n                                    <h5 class="modal-title" id="' + modalId + 'Label">Yorum Yaz<\/h5>\n                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"><\/button>\n                                  <\/div>\n                                  <div class="modal-body">\n                                    <textarea class="form-control" id="commentInput-' + modalId + '" rows="3" placeholder="Yorumunuzu yaz\u0131n..."><\/textarea>\n                                  <\/div>\n                                  <div class="modal-footer">\n                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">\u0130ptal<\/button>\n                                    <button type="button" class="btn dermai-color-btn-t" id="saveCommentBtn-' + modalId + '">Kaydet<\/button>\n                                  <\/div>\n                                <\/div>\n                              <\/div>\n                            <\/div>\n                        ');
              commentBtn.addEventListener('click', main$renderDashboard$slambda$lambda_2(modalId, this.$db_1, this.userUid12__1));
              btnGroup.appendChild(confirmBtn);
              btnGroup.appendChild(commentBtn);
              diseaseInfo.appendChild(btnGroup);
              userDetails.appendChild(diseaseInfo);
              userInfoSide.appendChild(userDetails);
              diseaseContainer.appendChild(userInfoSide);
              cardBody.appendChild(diseaseContainer);
            }

            cardDiv.appendChild(cardBody);
            this.$userListDiv_1.appendChild(cardDiv);
            this.tmp$ret$010__1 = Unit_getInstance();
            if (false) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 9:
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(12);
            var e = this.get_exception_x0n6w6_k$();
            console.error('Veri \xE7ekme hatas\u0131:', e);
            this.$userListDiv_1.textContent = 'Veri \xE7ekilemedi.';
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 11:
            this.set_exceptionState_fex74n_k$(12);
            return Unit_getInstance();
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(main$renderDashboard$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new main$renderDashboard$slambda(this.$auth_1, this.$db_1, this.$dermNameH5__1, this.$userListDiv_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(main$renderDashboard$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function main$renderDashboard$slambda_0($auth, $db, $dermNameH5, $userListDiv, resultContinuation) {
    var i = new main$renderDashboard$slambda($auth, $db, $dermNameH5, $userListDiv, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$renderDashboard$lambda(_unused_var__etf5q3) {
    deleteCookie('userAuth');
    window.location.reload();
    return Unit_getInstance();
  }
  function main$renderLogin$lambda$slambda($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, resultContinuation) {
    this.$emailInput_1 = $emailInput;
    this.$passwordInput_1 = $passwordInput;
    this.$auth_1 = $auth;
    this.$errorMessage_1 = $errorMessage;
    this.$loginContainer_1 = $loginContainer;
    this.$dashboardContainer_1 = $dashboardContainer;
    this.$dashboardHTML_1 = $dashboardHTML;
    this.$navLinks_1 = $navLinks;
    this.$db_1 = $db;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$renderLogin$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$renderLogin$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$renderLogin$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.email0__1 = this.$emailInput_1.value;
            this.password1__1 = this.$passwordInput_1.value;
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(signInWithEmailAndPassword(this.$auth_1, this.email0__1, this.password1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            setCookie('userAuth', result.user.uid, 7);
            main$renderDashboard(this.$loginContainer_1, this.$dashboardContainer_1, this.$dashboardHTML_1, this.$navLinks_1, this.$auth_1, this.$db_1);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var e = this.get_exception_x0n6w6_k$();
            this.$errorMessage_1.textContent = 'Giri\u015F ba\u015Far\u0131s\u0131z: ' + e.message;
            this.$errorMessage_1.style.display = 'block';
            console.error('Giri\u015F hatas\u0131:', e);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(main$renderLogin$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new main$renderLogin$lambda$slambda(this.$emailInput_1, this.$passwordInput_1, this.$auth_1, this.$errorMessage_1, this.$loginContainer_1, this.$dashboardContainer_1, this.$dashboardHTML_1, this.$navLinks_1, this.$db_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(main$renderLogin$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function main$renderLogin$lambda$slambda_0($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, resultContinuation) {
    var i = new main$renderLogin$lambda$slambda($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$renderLogin$lambda($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db) {
    return function (event) {
      event.preventDefault();
      var tmp = MainScope();
      launch(tmp, VOID, VOID, main$renderLogin$lambda$slambda_0($emailInput, $passwordInput, $auth, $errorMessage, $loginContainer, $dashboardContainer, $dashboardHTML, $navLinks, $db, null));
      return Unit_getInstance();
    };
  }
  function $getUserDataCOROUTINE$(db, userUid, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.db_1 = db;
    this.userUid_1 = userUid;
  }
  protoOf($getUserDataCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.userDocRef0__1 = doc(this.db_1, 'users', this.userUid_1);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(getDoc(this.userDocRef0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.docSnap1__1 = suspendResult;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.docSnap1__1.data();
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              tmp_1 = {};
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.data2__1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.data2__1.name;
            var tmp1_elvis_lhs = (!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : null;
            tmp_2.name3__1 = tmp1_elvis_lhs == null ? 'NULL' : tmp1_elvis_lhs;
            var tmp_4 = this;
            var tmp_5 = this.data2__1.surname;
            var tmp2_elvis_lhs = (!(tmp_5 == null) ? typeof tmp_5 === 'string' : false) ? tmp_5 : null;
            tmp_4.surname4__1 = tmp2_elvis_lhs == null ? 'NULL' : tmp2_elvis_lhs;
            var tmp_6 = this;
            var tmp_7 = this.data2__1.userType;
            var tmp3_elvis_lhs = (!(tmp_7 == null) ? typeof tmp_7 === 'string' : false) ? tmp_7 : null;
            tmp_6.usertype5__1 = tmp3_elvis_lhs == null ? 'patient' : tmp3_elvis_lhs;
            var tmp_8 = this;
            var tmp_9 = this.data2__1.date;
            var tmp4_elvis_lhs = (!(tmp_9 == null) ? typeof tmp_9 === 'string' : false) ? tmp_9 : null;
            tmp_8.date6__1 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
            this.diseaseDocRef7__1 = doc(this.db_1, 'userDiseaseData', this.userUid_1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(getDoc(this.diseaseDocRef7__1), this);
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
              var userId = tmp9_elvis_lhs == null ? this.userUid_1 : tmp9_elvis_lhs;
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
                destination.add_utx5q5_k$(this_1);
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
            this_2.uid = this.userUid_1;
            this_2.name = this.name3__1;
            this_2.surname = this.surname4__1;
            this_2.usertype = this.usertype5__1;
            this_2.date = this.date6__1;
            this_2.diseases = diseases;
            return this_2;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function mainWrapper() {
    main();
  }
  //region block: init
  USER_AUTH_COOKIE = 'userAuth';
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=dermai.js.map
