var http = require('http');
var fs = require('fs');
var map = require('through2-map');

// inStream.pipe(map(function(chunk) {
//     return chunk.toString().split('').reverse().join('')
//   })).pipe(outStream
//     var body = ''

var server = http.createServer(function(req, res) {

  if (req.method == 'POST') {

    req.on('data', function(data) {
      req.pipe(res);
    });
    // req.on('end', function() {
    //   console.log("Body: " + body);
    // });
  }



});

server.listen(process.argv[2]);