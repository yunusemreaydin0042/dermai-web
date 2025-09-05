@file:JsModule("firebase/firestore")
@file:JsNonModule
package com.kapgan.dermai.firebase

import kotlin.js.Promise

external fun getFirestore(app: dynamic = definedExternally): dynamic
external fun collection(db: dynamic, name: String): dynamic
external fun addDoc(col: dynamic, data: dynamic): Promise<dynamic>
external fun getDocs(col: dynamic): Promise<dynamic>

external fun doc(db: dynamic, vararg pathSegments: String): dynamic
external fun getDoc(documentRef: dynamic): Promise<dynamic>
external fun updateDoc(documentRef: dynamic, data: dynamic): Promise<dynamic>
external fun arrayUnion(vararg elements: dynamic): dynamic
external fun arrayRemove(vararg elements: dynamic): dynamic