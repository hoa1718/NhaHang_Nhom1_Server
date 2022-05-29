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
    var mssql = require('mssql');
var sqlserver = new mssql.mssql();
sqlserver.connect({'Server':'localhost','Port':'1433','Database':'Ql_NhaHang','User Id':'admin','Password':'12345'});
var result = sqlserver.execute("SELECT * FROM wherever;");  
}
// function executeStatement () {
//     request = new Request("select 123, 'hello world'", function (err, rowCount) {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log(rowCount + ' rows')
//       }
//       connection.close()
//     })}
  
module.exports={connected};

