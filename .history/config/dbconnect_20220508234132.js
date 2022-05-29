// var sql = require('mssql');
// const config={
//     user:'admin',
//     password:'12345',
//     server:'localhost',
//     database:'Ql_NhaHang',
//     driver:'msnodesqlv8'
// }
// const conn = new sql.ConnectionPool(config).connect().then(pool =>{
//     return pool;
// });
// module.exports={
//     conn:conn,
//     sql:sql,
// }
function connected(){
  var config = {
    "server": "localhost",
    "authentication": {
      "type": "default",
      "options": {
        "userName": "admin",
        "password": "12345"
      }
    },
    "options": {
      "port": 1433,
      "database": "Ql_NhaHang",
      "trustServerCertificate": true
    }
  }
  
    
    
}
module.exports={connected};

