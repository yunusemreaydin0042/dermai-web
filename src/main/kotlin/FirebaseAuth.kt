@file:JsModule("firebase/auth")
@file:JsNonModule
package com.kapgan.dermai.firebase

import kotlin.js.Promise

external fun getAuth(app: dynamic = definedExternally): dynamic
external fun signInWithEmailAndPassword(auth: dynamic, email: String, password: String): Promise<dynamic>
