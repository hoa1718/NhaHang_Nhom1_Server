var sql = require('mssql');
const config={
    user:'admin',
    password:'12345',
    server:'localhost',
    database:'Ql_NhaHang',
    driver:'msnodesqlv8'
}
const connected = new sql.ConnectionPool(config).connect().then(pool =>{
    return pool;
});
module.exports={
    connected:co
}