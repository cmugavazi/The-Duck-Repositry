const express = require('express');
const cors = require("cors");
var connection = require('./database.js')();


var app = express();
app.use(cors());

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // 
  }
var port = process.env.port || 5000;


connection.connect(function(err){
    if (err) {
        return console.log('error' + err.message);
    }
    console.log("Database connection successful");
});

app.get('/all', (req, res) => {
    connection.query(
        "SELECT * FROM Ducks",
        function(err, results, fields) {
          if (err == null && results.length > 0) {
            res.json(results);
          } else {
            res.json({ error: 404 });
          }
        }
      );
    });

    app.get('/all/:id', (req, res) => {
        connection.query(
            "Select * from Ducks where duckID = " + req.params.id,
            function(err, results, fields) {
                if (err == null && results.length > 0) {
                  res.json(results);
                } else {
                  res.json({ error: 404 });
                }
            }
        )
    });
    

app.listen(port);
console.log(port);