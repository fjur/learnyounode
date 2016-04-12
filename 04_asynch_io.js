var fs = require('fs')

fs.readFile(process.argv[2], function(err, buffer){
  var count = buffer.toString().split(/\r\n|\r|\n/).length -1;
  console.log(count);
});


