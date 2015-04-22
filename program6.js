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
=======
var extension = process.argv[3];

mymodule.showList(filepath, extension, callback);

function callback (err, list) {
  list.forEach(function (file) {
    console.log(file)
  });
}
>>>>>>> 65c8976a8cbaa123631aefdf0d64c6dcfbc8173a
