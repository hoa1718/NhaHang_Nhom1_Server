const express = require('express');
const path= require('path');
const morgan= require('morgan');
// const route = require('./routes');
const app = express();
const port = 3000;
const {conn,sql}= require('./dbconnect')

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'img')));
app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/test', function(req,res){
  var pool =  conn;
  var sqlString = "SELECT * FROM MonAn";
  return pool.request().query(sqlString,function(err,data){
    console.log(err,data);
  })
  res.send('student')
})
// route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

