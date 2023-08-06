plugins {
    kotlin("multiplatform")
    kotlin("native.cocoapods")
    id("com.android.library")
    id("org.jetbrains.compose")
}

kotlin {
    // Targets
    android {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }
    }
    jvm("desktop") {
        jvmToolchain(11)
    }
    js(IR) {
        browser()
    }
    iosX64()
    iosArm64()
    iosSimulatorArm64()

    cocoapods {
        summary = "Common"
        homepage = "https://github.com/MohamedRejeb"
        version = "1.0"
        ios.deploymentTarget = "14.1"
        podfile = project.file("../ios/Podfile")
        framework {
            baseName = "Common"
            isStatic = true
        }
    }

    // Platform-specific dependencies
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(compose.material)
                implementation(compose.material3)
            }
        }

        val androidMain by getting {
            dependencies {
                // Android specific dependencies
            }
        }

        val desktopMain by getting {
            dependencies {
                // Desktop specific dependencies
            }
        }

        val jsMain by getting {
            dependencies {
                // Js specific dependencies
            }
        }

        val iosX64Main by getting
        val iosArm64Main by getting
        val iosSimulatorArm64Main by getting
        val iosMain by creating {
            dependsOn(commonMain)
            iosX64Main.dependsOn(this)
            iosArm64Main.dependsOn(this)
            iosSimulatorArm64Main.dependsOn(this)
            dependencies {
                // iOS specific dependencies
            }
        }
    }
}

android {
    namespace = "com.mohamedrejeb.kmp.app.common"
    compileSdk = 33

    defaultConfig {
        minSdk = 24

        compileOptions {
            sourceCompatibility = JavaVersion.VERSION_1_8
            targetCompatibility = JavaVersion.VERSION_1_8
        }
    }
}