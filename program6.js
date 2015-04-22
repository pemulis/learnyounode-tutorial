var mymodule = require('./mymodule');

var filepath = process.argv[2];
<<<<<<< HEAD
var ext = process.argv[3];

mymodule(filepath, ext, function(err, files) {
  if (err) {
    return console.error('There was an error:', err);
  }
  files.forEach(function (file) {
    console.log(file);
  });
});
