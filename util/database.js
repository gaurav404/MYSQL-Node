const mysql = require('mysql2');
console.log(process.env.NODE_ENV);
const pool = mysql.createPool(process.env.NODE_ENV==='production'?require('./prod_database.js'):require('./dev_database.js'));

module.exports = pool.promise();
