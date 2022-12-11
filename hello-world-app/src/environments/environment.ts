// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'hello-world-app-a8fd2',
    appId: '1:556397261603:web:18f3b363ec1b6d4d135296',
    storageBucket: 'hello-world-app-a8fd2.appspot.com',
    apiKey: 'AIzaSyAOiiKoNP0gRD6Qt4HFBfe1zb9xOnefJrU',
    authDomain: 'hello-world-app-a8fd2.firebaseapp.com',
    messagingSenderId: '556397261603',
    measurementId: 'G-MJTV1CLWK8',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOiiKoNP0gRD6Qt4HFBfe1zb9xOnefJrU",
  authDomain: "hello-world-app-a8fd2.firebaseapp.com",
  projectId: "hello-world-app-a8fd2",
  storageBucket: "hello-world-app-a8fd2.appspot.com",
  messagingSenderId: "556397261603",
  appId: "1:556397261603:web:18f3b363ec1b6d4d135296",
  measurementId: "G-MJTV1CLWK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);