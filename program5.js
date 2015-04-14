var fs = require('fs')
var path = require('path')

var filepath = process.argv[2]
var extension = process.argv[3]

/* Original code */

/*
fs.readdir(filepath, function(err, list) {
  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === '.' + extension) {
      console.log(list[i])
    }
  }
}) */

// And some better code combingint the original code and the official solution.

fs.readdir(filepath, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + extension)
      console.log(file)
  })
})
