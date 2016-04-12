var fs = require('fs');
var path = require('path');
var pathname = process.argv[2];
var extension_filter = '.' + process.argv[3];

fs.readdir(pathname, function(err, list){
  list.forEach(function(item){
    if (path.extname(item) == extension_filter){
      console.log(item);
    }
  });
}); //pathname, callback