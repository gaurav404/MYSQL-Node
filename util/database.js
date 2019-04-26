const mysql = require('mysql2');

const pool = mysql.createPool(process.env.NODE_ENV==='production'?require('./prod_database.js'):require('./dev_database.js'));

module.exports = pool.promise();

/*
host: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
user: 'dummyUser',
database: 'db_intern',
password: 'dummyUser01',
port:3306
*/
