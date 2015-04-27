var http = require('http');
var fs = require('fs');

var filepath = process.argv[3];
var port = process.argv[2];

var server = http.createServer(function (req, res) {
  fs.createReadStream(filepath).pipe(res);
});
server.listen(port);

/* Official solution for reference. */

/*

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))

*/
