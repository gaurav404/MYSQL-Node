const express = require('express');
const bodyParser = require('body-parser');
console.log(process.env.NODE_ENV);
const db = require('./util/database');
const path = require('path');
const app = express();
const public = require('./routes/public');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(public);
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}
app.listen(process.env.PORT||5000);
