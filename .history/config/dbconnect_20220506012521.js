var sql = require('mssql');
const config={
    user:'admin',
    password:'12345',
    server:'localhost',
    database:'Ql_NhaHang',
    driver:'msnodesqlv8',
    port:3000
}
sql.connect(config).then(pool=>{
    return pool.request().input('input_parameter',sql.Int,1).query("SELECT * FROM MonAn")
}).then(result=>{
    console.dir()
})
module.exports={
    conn:conn,
    sql:sql,
}