const firebase = require("firebase-admin");
const firebaseConfig = {
    apiKey: "AIzaSyA7EX6_SWUgVu3Cepj_ktj3naFBNWVEk-k",
    authDomain: "profile-management-71657.firebaseapp.com",
    projectId: "profile-management-71657",
    storageBucket: "profile-management-71657.appspot.com",
    messagingSenderId: "889691562453",
    appId: "1:889691562453:web:8d4b02b92149a91c3e1d5c",
  };

const bucket = firebase.storage().bucket();
module.exports = { bucket };
