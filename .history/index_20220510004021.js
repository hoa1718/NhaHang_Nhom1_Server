
const express = require('express');
const app = express();
const path= require('path');
const morgan= require('morgan');
const route = require('./routes');
const cors = require('cors')
var properties = require('./config/properties');
const port = 4000;
const db= require('./config/dbconnect')
db.connected();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'img')));
app.use(morgan('combined'))

const whitelist = ['http://localhost:4000','http://localhost:4000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

