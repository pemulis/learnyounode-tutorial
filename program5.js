var fs = require('fs');
var path = require('path');

var filepath = process.argv[2];
var extension = process.argv[3];

/* Original code */

fs.readdir(filepath, function(err, list) {
  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === '.' + extension) {
      console.log(list[i])
    }
  }
})

<<<<<<< HEAD
// And some better code combining the original code and the official solution.
=======
// and some better code combining the original code and the official solution.
>>>>>>> 65c8976a8cbaa123631aefdf0d64c6dcfbc8173a

/*
fs.readdir(filepath, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + extension)
      console.log(file)
<<<<<<< HEAD
  });
});
=======
  })
})
*/
>>>>>>> 65c8976a8cbaa123631aefdf0d64c6dcfbc8173a
