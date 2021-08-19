const express = require('express');
const cors = require("cors");

var serveStatic = require("serve-static");
var path = require("path");
var connection = require('./database.js')();


var app = express();
app.use(serveStatic(__dirname + "/dist"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get("/", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "dist/index.html"));
  });
//retrieves all information from Ducks table;
app.get('/all', (req, res) => {
    connection.query(
        "SELECT date_format(feedingTime, '%D %M %Y') as 'Feeding Time', foodType, duckLocation, numOfDucks, foodQty FROM Ducks;",
        function(err, results, fields) {
          if (err == null && results.length > 0) {
            res.json(results);
          } else {
            res.json({ error: 404 });
          }
        }
      );
    });

    // inserts information into Ducks table based on user submission form
    app.post('/addDucks', (req, res) => {
        var duckInfo = req.body;
        console.log(duckInfo);
        let data = [duckInfo.feedingTime, duckInfo.foodType, duckInfo.duckLocation, duckInfo.numOfDucks, duckInfo.foodQty];
        let sql = "insert into `Ducks` (feedingTime, foodType, duckLocation, numOfDucks, foodQty)  values (?, ?, ?, ?, ?)";
        connection.query(sql, data, function(error, results, fields){
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
        
    });

app.listen(port);
console.log(port);

