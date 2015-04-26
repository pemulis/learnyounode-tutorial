var net = require('net');
var server = net.createServer(function (socket) {
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = date.getMonth() + 1;
  var day = date.getDate().toString();
  var hours = date.getHours().toString();
  var minutes = date.getMinutes().toString();
  if (month < 10) {
    month = '0' + month.toString();
  } else {
    month = month.toString();
  }
  var convertedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
  socket.end(convertedDate);
});

server.listen(process.argv[2]);

/* And the official solution, for comparison. Note the zeroFill function, which keeps us from constantly repeating ourselves, as well as conversion to String. */

/*

var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

*/
