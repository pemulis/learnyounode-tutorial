var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  var parsed = url.parse(req.url, true);
  var pathname = parsed['pathname'];

  if (pathname === '/api/unixtime') {
    //do stuff
  } else if (pathname === '/api/parsetime') {
    //do different stuff
  } else {
    return 'Invalid request.\n';
  }
});
