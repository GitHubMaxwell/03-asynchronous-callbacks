'use strict';

const fs = require('fs');
let newArr = [];


module.exports = exports = function(arr,callback) {

  fs.readFile(arr[0], (err, data) => {
    if(err) return callback(err); 
    newArr[0] = data.toString().trim();

    fs.readFile(arr[1], (err, data) => {
      if(err) return callback(err); 
      newArr[1] = data.toString().trim();

      fs.readFile(arr[2], (err, data) => {
        if(err) return callback(err); 
        newArr[2] = data.toString().trim();
        return callback(undefined, newArr);
      });
    });
  });
};