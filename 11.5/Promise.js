// var fs = require('fs');
//
// var readFile = function (filename) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(filename, function (err, data) {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// };
//
// var gen = function *() {
//     var f1 = yield readFile('hello.txt');
//     var f2 = yield readFile('world.txt');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };

var readFile = require('fs-readfile-promise');

readFile('hello.txt')
    .then(function(data){
        console.log(data.toString());
    })
    .then(function(){
        return readFile('world.txt');
    })
    .then(function(data){
        console.log(data.toString());
    })
    .catch(function(err) {
        console.log(err);
    });