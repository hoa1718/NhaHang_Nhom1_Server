
var admin = require("firebase-admin");

var serviceAccount = require("../customerKey.json");
var serviceAccount = require("../nhahangKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://profile-management-71657-default-rtdb.asia-southeast1.firebasedatabase.app"
},);
const db=admin.firestore();
module.exports = db;
