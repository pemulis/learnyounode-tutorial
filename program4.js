var fs = require('fs');

//var lines = fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
//  data.split('\n').length - 1;
//});
//console.log(lines);

// The above failed because console.log() needs be within the callback function, and the callback function should be anonymous.


var lines = undefined;

function countLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    lines = fileContents.split('\n').length - 1;
    callback();
  })
}

function displayLines() {
  console.log(lines);
}

countLines(displayLines);
