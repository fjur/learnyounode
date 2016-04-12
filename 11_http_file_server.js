var http = require('http');
var fs = require('fs')


var server = http.createServer(function(req, res) {
  // request handling logic...
  var readStream = fs.createReadStream(process.argv[3]);

  readStream.on('open', function() {
    readStream.pipe(res);
  });
  // console.log(file);
  readStream.on('error', function(err) {
    res.end(err);
  });
});

server.listen(process.argv[2]);