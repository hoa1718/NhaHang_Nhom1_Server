var admin = require("firebase-admin");

var customerAccount = require("../customerKey.json");
var billsAccount = require("../nhahangKey.json");
function initializeCustomer(){
  return admin.initializeApp({
    credential: admin.credential.cert(customerAccount),
    databaseURL: "https://profile-management-71657-default-rtdb.asia-southeast1.firebasedatabase.app"
  },'secondary');
}
function initializeBill(){
  return  
}

const db=admin.firestore();
module.exports = db;
