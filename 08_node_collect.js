var http = require('http');


http.get(process.argv[2], function(response) {

  var values = '';

  response.on("data", function(data) {
    values += data.toString();
    // console.log(values);
    // values.concat(data.toString());
    // console.log(data.toString());
  });

  response.on("end", function(){
    console.log(values.length);
    console.log(values);
  });  

  // response.end(function() {
  //   var finalString = values.length() + "\n" + values;
  //   // console.log(finalString);
  // });



});