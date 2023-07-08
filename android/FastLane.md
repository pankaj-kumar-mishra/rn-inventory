### STEPS

## Initialize Fastlane
**fastlane init**
    com.inventory.pkm -> your package name
    enter -> skip secret
    n -> no metadata

## Validate key.json to established success connection to play store
**fastlane run validate_play_store_json_key json_key:your_play_service_account_key.json**

## Generate signin key (keystore)

*To find the JDK path*
**/usr/libexec/java_home**

*Redirect to jdk directory*
**cd path**

*Generate signin key*
**keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000**

*Get the keystore file*
*Open finder on top "Go" -> "Go to Folder"*

*Use in Project*
*Move the keystore to project/android/app*
*Set constants in android/gradle.properties*
APP_UPLOAD_STORE_FILE=fileName.keystore
APP_UPLOAD_KEY_ALIAS=aliasName
APP_UPLOAD_STORE_PASSWORD=password
APP_UPLOAD_KEY_PASSWORD=password

*Navigate to android/app/build.gradle*
*Under signinConfig*
release {
    storeFile file(APP_UPLOAD_STORE_FILE)
    storePassword APP_UPLOAD_STORE_PASSWORD
    keyAlias APP_UPLOAD_KEY_ALIAS
    keyPassword APP_UPLOAD_KEY_PASSWORD
}
*Under buildTypes/release*
signingConfig signingConfigs.release

*Naviagate to android/app/fastlane/Appfile and fill with the json key name*
json_key_file("your_play_service_account_key.json")

*Naviagate to android/app/fastlane/Fastfile and update assembleRelease with bundleRelease*
  desc "Deploy a new version to the Google Play"
  lane :deploy do
    gradle(task: "clean bundleRelease")
    upload_to_play_store(
      track: 'internal'
    )
  end

*Navigate to android/app/build.gradle and update versionCode and versionName*
defaultConfig {
    applicationId "com.inventory.pkm"
    minSdkVersion rootProject.ext.minSdkVersion
    targetSdkVersion rootProject.ext.targetSdkVersion
    versionCode 2
    versionName "2.0"
}

*Finally Deploy*
**fastlane deploy**
