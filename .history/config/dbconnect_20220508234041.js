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
        "password": "password_01"
      }
    },
    "options": {
      "port": 1433,
      "database": "master",
      "trustServerCertificate": true
    }
  }
  
    
    async () => {
     try {
      // make sure that any items are correctly URL encoded in the connection string
      await sql.connect(sqlConfig)
      const result = await sql.query`select * from mytable where id = ${value}`
      console.dir(result)
     } catch (err) {
      // ... error checks
      
     }
    }   
}
f
  
module.exports={connected};

