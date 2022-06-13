var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nhahang-5d1b7-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db=admin.firestore();
module.exports = ;
