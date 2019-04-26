const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database');
const path = require('path');
const app = express();
const public = require('./routes/public');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}
app.use(public);
app.listen(5000);
