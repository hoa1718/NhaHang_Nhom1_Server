var admin = require("firebase-admin");

var customerAccount = require("../customerKey.json");
var billsAccount = require("../nhahangKey.json");
function Customer(){
  admin.initializeApp({
    credential: admin.credential.cert(customerAccount),
    databaseURL: "https://profile-management-71657-default-rtdb.asia-southeast1.firebasedatabase.app"
  },);
}
function Bill()

const db=admin.firestore();
module.exports = db;
