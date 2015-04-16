var mymodule = require('./mymodule');

var filepath = process.argv[2];
var extension = process.argv[3];

mymodule.showList(filepath, extension, callback);

function callback (err, list) {
  list.forEach(function (file) {
    console.log(file)
  });
}
