'use strict';

const fs = require('fs');

// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
// module.exports = exports = (file, callback) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { 
//       callback(err); 
//     } else { 
//       callback(undefined, data.toString().trim());
//     }
//   });
// };

// const read = function(file, callback) {
//   fs.readFile( file, (err, data) => {
//     if(err) { 
//       setTimeout(function() {callback(err);}, 500);
//     } else { 
//       callback(undefined, data.toString().trim());
//     }
//   });
// };

const read = function(file, callback) {
  setTimeout(function() {
    fs.readFile( file, (err, data) => {
      if(err) {
        callback(err);
      } else {
        callback(undefined, data.toString().trim());
      }
    });
  },500);
};

// const read = function(file, callback) {
//   setTimeout(function() {
//     callback(new Error('Oh Boy'));
//   }, 500);
// };

module.exports = exports = read;