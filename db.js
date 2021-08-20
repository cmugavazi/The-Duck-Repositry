
var mysql = require('mysql2');


//database connection - add your own password
var db = function() {
    connection = mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
    });
    return connection;
}

module.exports = db;