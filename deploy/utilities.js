var fs = require("fs");

module.exports = {
  readJSONFile: (path, callback) => {
    var ext = ".json";
    var filePath = __dirname + "/data" + path;

    fs.readFile(filePath + ext, function (err, data) {
      if (err) {
        callback(err);
      } else {
        callback(null, JSON.parse(data));
      }
    });
  },

  writeJSONFile: (path, json, callback) => {
    var ext = ".json";
    var filePath = __dirname + "/data" + path;

    fs.writeFile(filePath + ext, JSON.stringify(json, null, 2), (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, json);
      }
    });
  },
};
