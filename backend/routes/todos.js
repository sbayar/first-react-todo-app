var express = require("express");
var router = express.Router();
var { readJSONFile } = require("../utilities");

router.get("/", function (req, res) {
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

router.post("/", function (req, res) {
    var item = req.body;
    item.id = new Date().valueOf();
  
    res.status(200).send(item);
  });

router.get("/:todoId/comments", function (req, res) {
  readJSONFile("/todos", (err, json) => {
    if (err) {
      res.status(404).send(err);
    } else {
      setTimeout(() => {
        const todoId = parseInt(req.params.todoId, 10);
        const foundComment = json.find((comment)=> comment.id === todoId);

        res.status(200).send(foundComment);
      }, 1500);
    }
  });
});

router.delete("/:todoId", function (req, res) {
  res.status(200).send({});
});

router.put("/:todoId", function (req, res) {
  res.status(200).send(req.body);
});



module.exports = router;
