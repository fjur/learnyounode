var http = require('http');

var urls = process.argv.slice(2);
var results = [];

// initialise results array
for (i = 0; i < urls.length; i++) {
  results[i] = null;
}

for (i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      var result = "";
      request.setEncoding("utf8");
      request.on("data", function(data) {
        result += data;
      });
      request.on("end", function() {
        results[i] = result;
        var resultCount = 0;
        for (j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++;
        }
        if (resultCount == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
      });
    });
  })(i);
}


// // // var http = require('http');
// // // var results = [];
// // // index = 2;

// // // function printResults() {
// // //   // console.log(results.length);
// // //     // console.log(results[1]);
// // //   results.forEach(function(result) {
// // //     console.log(result);
// // //   });
// // // };

// // // for (var i = 0; i < 3; i++) {
// // //   http.get(process.argv[i+2], function(response) {
// // //     // console.log(process.argv[i+2]);
// // //     var values = '';

// // //     response.on("data", function(data) {
// // //       values += data.toString();
// // //     });

// // //     response.on("end", function() {
// // //       // console.log(values);
// // //       results[i] = values;
// // //       if (results.length == 3){
// // //         printResults();
// // //       }
// // //     });

// // //   });
// // // }

// // // console.log(process.argv[4]);


// var http = require('http');

// function printResults(results) {
//   // console.log(results.length);
//   // console.log(results[0]);
//   //   console.log(results[1]);
//   // console.log(results[2]);

//   results.forEach(function(result) {
//     console.log(result);
//   });
// };

// function HTTPGet(index) {
//   http.get(process.argv[index + 2], function(response) {
//     var results = [];

//     var values = '';

//     response.on("data", function(data) {
//       values += data.toString();
//     });

//     response.on("end", function() {
//       // console.log(values);
//       results[index] = values;
//       if (results.length === 3) {
//         printResults(results);
//       }
//     });

//   });

// }

// // http://localhost:36674
// // http://localhost:39738
// // http://localhost:54845

// for (var i = 0; i < 3; i++) {
//   HTTPGet(i);
// }

// // var http = require('http')
// // var bl = require('bl')
// // var results = []
// // var count = 0

// // function printResults () {
// //   for (var i = 0; i < 3; i++)
// //     console.log(results[i])
// // }

// // function httpGet (index) {
// //   http.get(process.argv[2 + index], function (response) {
// //     response.pipe(bl(function (err, data) {
// //       if (err)
// //         return console.error(err)

// //       results[index] = data.toString()
// //       count++

// //       if (count == 3) // yay! we are the last one!
// //         printResults()
// //     }))
// //   })
// // }

// // for (var i = 0; i < 3; i++)
// // httpGet(i)