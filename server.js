const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database');
const app = express();
const public = require('./routes/public');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(public);
app.listen(5000);
