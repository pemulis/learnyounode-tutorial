var http = require('http');
var url = process.argv[2];

/* Original solution. */

/*
function req(url) {
  http.get(url, function callback (response) {
    response.on("data", function (data) {
      console.log(data);
    }).setEncoding('utf8');
    response.on('error', function (err) {
      console.log('There was an error: ' + err)
    });
  });
}

req(url);
*/

/* Cleaned up based on official solution. */

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});
