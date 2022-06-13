
function connected(){
  var sql = require("mssql");

  // config for your database
  var config = {
      user: 'admin',
      password: '12345',
      server: 'localhost', 
      database: 'Ql_NhaHang',
      trustServerCertificate: true
  };

  // connect to your database
  sql.connect(config, function (err) {
  
      if (err) console.log(err);
      else console.log("Connected !");
  });
}

module.exports={connected};

