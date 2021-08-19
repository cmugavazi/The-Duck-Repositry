
var mysql = require('mysql2');


//database connection - add your own password
var db = function() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Malachi97',
        database: 'freshworks'
    });
    return connection;
}

module.exports = db;