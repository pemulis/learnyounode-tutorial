var fs = require('fs');
//var buf = fs.readFileSync(process.argv[2]);
//var str = buf.toString();
//var split = str.split('\n');
//console.log(split.length - 1);

var contents = fs.readFileSync(process.argv[2], 'utf8');
var lines = contents.split('\n').length - 1;
console.log(lines);
