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
 
}
function executeStatement() {
  const request = new Request("select TenMon, 'MonAn'", (err, rowCount) => {
    if (err) {
      throw err;
    }
    console.log('DONE!');
    connection.close();
  });
  // Emits a 'DoneInProc' event when completed.
  request.on('row', (columns) => {
    columns.forEach((column) => {
      if (column.value === null) {
        console.log('NULL');
      } else {
        console.log(column.value);
      }
    });
  });
  // In SQL Server 2000 you may need: connection.execSqlBatch(request);
  connection.execSql(request);
}
module.exports={connected};

