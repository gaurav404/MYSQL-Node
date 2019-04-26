const mysql = require('mysql2');

const pool = mysql.createPool(require('./dev_database.js'));

module.exports = pool.promise();
