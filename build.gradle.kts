plugins {
    kotlin("js") version "2.2.0"

}

group = "com.kapgan"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/kotlin/p/kotlin/bootstrap/")
    maven("https://maven.pkg.jetbrains.space/public/p/kotlinx-coroutines/maven")
}

dependencies {
    implementation(kotlin("stdlib-js"))

    // Kotlin React wrapperları
    //implementation("org.jetbrains.kotlin-wrappers:kotlin-react:18.2.0-pre.690")
    //implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:18.2.0-pre.690")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react:17.0.2-pre.202-kotlin-1.5.0")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:17.0.2-pre.202-kotlin-1.5.0")
    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.7.3")
    testImplementation(kotlin("test"))

    // npm paketleri
    implementation(npm("react", "17.0.2"))
    implementation(npm("react-dom", "17.0.2"))
    implementation(npm("bootstrap", "5.3.3"))
    implementation(npm("@popperjs/core", "2.11.8"))
    implementation(npm("@fortawesome/fontawesome-free", "6.5.1"))
    implementation(npm("firebase", "12.2.01"))
}

kotlin {
    js(IR) {
        browser {
            binaries.executable()
            webpackTask {
                cssSupport { enabled = true }
            }
            runTask {
                cssSupport { enabled = true }
            }
        }
    }
}
