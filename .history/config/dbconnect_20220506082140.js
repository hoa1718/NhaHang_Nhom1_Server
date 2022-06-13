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
    var Connection = require('tedious').Connection;  
    var config = {  
        server: 'localhost',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'admin', //update me
                password: '12345'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'Ql_NhaHang'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log(request = new Request("select 123, 'hello world'", function (err, rowCount) {
            if (err) {
              console.log(err)
            } else {
              console.log(rowCount + ' rows')
            }
            connection.close());  
    });
    
    connection.connect();
    
}
module.exports={connected};

