const express = require('express');
const path= require('path');
const morgan= require('morgan');
const route = require('./routes');
const app = express();
const port = 3000;
const {connected,sql}= require('./config/dbconnect')

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'img')));
app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/test',async function(req,res){
  var pool = await connected;
  var sqlString = "SELECT * FROM MonAn";
  return await pool.re
})
route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

