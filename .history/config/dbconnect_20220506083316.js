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
    const sql = require('mssql')
    const sqlConfig = {
      user:'admin',
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      server: 'localhost',
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
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
function executeStatement () {
    request = new Request("select 123, 'hello world'", function (err, rowCount) {
      if (err) {
        console.log(err)
      } else {
        console.log(rowCount + ' rows')
      }
      connection.close()
    })}
  
module.exports={connected};

