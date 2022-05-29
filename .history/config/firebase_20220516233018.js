
    const firebase = require('firebase-admin')
    const firebaseConfig = {
        apiKey: "AIzaSyCmkRiwPbkdGXmSffUHGUtjClTT7DOOBAs",
        authDomain: "nhahang-5d1b7.firebaseapp.com",
        projectId: "nhahang-5d1b7",
        storageBucket: "nhahang-5d1b7.appspot.com",
        messagingSenderId: "757442267494",
        appId: "1:757442267494:web:10e9c3dedaad1e78c320a7",
        measurementId: "G-GF6PV2YN1M"
      };
    firebase.initializeApp(firebaseConfig);
      const bucket = firebase.storage().bucket()
    
module.exports={connected}