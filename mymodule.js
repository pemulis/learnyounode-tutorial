var fs = require('fs');
var path = require('path');

/* Original version. */

module.exports = function(filepath, ext, callback) {
  var extension = "." + ext;
  fs.readdir(filepath, function(err, files) {
    if (err) {
      return callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) === extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
}

/* Alternate version based on official solution. */

/*
module.exports = function (filepath, ext, callback) {
  var extension = '.' + ext;
  fs.readdir(filepath, function(err, files) {
    if (err) {
      return callback(err, null);
    }
    else {
      files = files.filter(function (file) {
        return path.extname(file) === extension;
      });
      callback(null, files);
    }
  });
}
*/
