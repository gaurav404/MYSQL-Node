const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
  user: 'dummyUser',
  database: 'db_intern',
  password: 'dummyUser01',
  port:3306
});

module.exports = pool.promise();
/*
host: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
user: 'dummyUser',
database: 'db_intern',
password: 'dummyUser01',
port:3306
*/
