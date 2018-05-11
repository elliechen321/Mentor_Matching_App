#Mentor Match

<p align="center">
  <img src="http://via.placeholder.com/300" alt="Bundle Analyzer example"
       width="650" height="335">
</p>

## Table of Contents

* [About](#About)
* [How It Works](#how-it-works)
* [Technologies](#Technologies)
* [Instructions](#Instructions)
  * [react native](#react-native)
  * [server](#express-node-server)
  * [expo](#expo)
  * [mysql](#mysql)

## About

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.


## How It Works

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

## Technologies

## Instructions

#### `react-native`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### Express-Node-Server `express-node-server`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### Expo `expo`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### MySql `mysql`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).
