// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tacobellapp-aad01',
    appId: '1:378789450906:web:7bbf6b52da570ac728bb23',
    databaseURL: 'https://tacobellapp-aad01-default-rtdb.firebaseio.com',
    storageBucket: 'tacobellapp-aad01.appspot.com',
    apiKey: 'AIzaSyDXZkzfvSEXNkAVl0gdvDU6y0XjZpIKqNk',
    authDomain: 'tacobellapp-aad01.firebaseapp.com',
    messagingSenderId: '378789450906',
    measurementId: 'G-FSWFXFDW9H',
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

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDXZkzfvSEXNkAVl0gdvDU6y0XjZpIKqNk",

  authDomain: "tacobellapp-aad01.firebaseapp.com",

  databaseURL: "https://tacobellapp-aad01-default-rtdb.firebaseio.com",

  projectId: "tacobellapp-aad01",

  storageBucket: "tacobellapp-aad01.appspot.com",

  messagingSenderId: "378789450906",

  appId: "1:378789450906:web:7bbf6b52da570ac728bb23",

  measurementId: "G-FSWFXFDW9H"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);