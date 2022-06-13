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
  var sql = require("mssql");

  // config for your database
  var config = {
      user: 'admin',
      password: '12345',
      server: 'localhost', 
      database: 'Ql_NhaHang' 
  };

  // connect to your database
  sql.connect(config, function (err) {
  
      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();
         
      // query to the database and get the records
      request.query('select * from MonAn', function (err, recordset) {
          
          if (err) console.log(err)

          // send records as a response
          log(recordset);
          
      });
  });
}

module.exports={connected};

