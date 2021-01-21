const express = require("express");
const { readJSONFile } = require("./utilities");
const path = require('path');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// ---- SERVE STATIC FILES ---- //
app.use(express.static(path.join(__dirname, 'static')));

app.get("/todos", function (req, res, next) {
    readJSONFile("/todos", (err, json) => {
      if (err) {
        res.status(404).send(err);
      } else {
        setTimeout(() => {
          res.status(200).send(json);
        }, 1500);
      }
    });
  });
  
  app.delete("/todos/:id", function (req, res) {
    res.status(200).send({});
  });
  
  app.put("/todos/:id", function (req, res) {
    res.status(200).send(req.body);
  });
  
  app.post("/todos", function (req, res) {
    var item = req.body;
    item.id = new Date().valueOf();
  
    res.status(200).send(item);
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);