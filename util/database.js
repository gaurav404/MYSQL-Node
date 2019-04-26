const mysql = require('mysql2');

const pool = mysql.createPool(require('./prod_database.js'));

module.exports = pool.promise();
