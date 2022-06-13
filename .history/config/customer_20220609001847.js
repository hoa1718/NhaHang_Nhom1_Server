// const firebase = require("firebase-admin");
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const firebaseConfig = {
//     apiKey: "AIzaSyA7EX6_SWUgVu3Cepj_ktj3naFBNWVEk-k",
//     authDomain: "profile-management-71657.firebaseapp.com",
//     projectId: "profile-management-71657",
//     storageBucket: "profile-management-71657.appspot.com",
//     messagingSenderId: "889691562453",
//     appId: "1:889691562453:web:8d4b02b92149a91c3e1d5c",
//     credential: applicationDefault(),
//   };
// const customer= initializeApp(firebaseConfig);
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://profile-management-71657-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db=admin.firestore().collection('users')
module.exports = { db };
