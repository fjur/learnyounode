var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback) {
var ext = '.' + fileExt;
  // console.log("we are here");

  var values = [];
  fs.readdir(dirName, function(err, list) {
    if (err){
      return callback(err); //why is there a callback here
    }

    list.forEach(function(item) {
        // console.log("Extensino filter is " + ext);
        // console.log("Path is " + path.extname(item));

      if (path.extname(item) ==  ext) {
        // console.log("we got into here")
        values.push(item);
        // console.log('value is now ' + values);
      }
    });
    callback(null, values);
  });
};