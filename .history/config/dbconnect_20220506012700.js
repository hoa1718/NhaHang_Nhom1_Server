var sql = require('mssql');
const config={
    user:'admin',
    password:'12345',
    server:'localhost',
    database:'Ql_NhaHang',
    driver:'msnodesqlv8',
    port:3000
}
function connected(){

}

module.exports={
    conn:conn,
    sql:sql,
}