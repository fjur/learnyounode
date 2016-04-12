
var pathname = process.argv[2];
// var extension_filter = '.' + process.argv[3];
var checkExtension = require('./06_make_it_modular.js');


checkExtension(pathname, process.argv[3], function(err, data){

  if (err){
    console.log(err);
  } else {
    data.forEach(function(item){
      console.log(item);
    });
    // console.log(data);
  }
});

// fs.readdir(pathname, function(err, list){
//   list.forEach(function(item){
//     if (path.extname(item) == extension_filter){
//       console.log(item);
//     }
//   });
// }); //pathname, callback