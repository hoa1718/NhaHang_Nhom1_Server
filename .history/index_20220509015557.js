const app = express();
const express = require('express');
const path= require('path');
const morgan= require('morgan');
const route = require('./routes');
const port = 4000;
const db= require('./config/dbconnect')
db.connected();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'img')));
app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

