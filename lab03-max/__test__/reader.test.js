'use strict';

let reader = require('../lib/reader.js');

describe('Reader Module', () => {


  it('should callback with error for a non-existent file', function(done) {
    reader(['missing.txt'], (err) => {
      // expect(err).toMatch(/ENOENT/);
      expect(err).not.toBeUndefined();
      done();
    });
  });

  it('should callback with file contents of multiple files in order', function(done) {
  
    const expected1 = 'words about apples'; 
    const expected2 = 'words about bananas';
    const expected3 = /cucumbers/;

    reader([`${__dirname}/../data/apples.txt`,`${__dirname}/../data/bananas.txt`,`${__dirname}/../data/cucumbers.txt`], (err, data) => {
      expect(err).toBeUndefined();
      expect(data[0]).toBe(expected1);
      expect(data[1]).toBe(expected2);
      expect(data[2]).toMatch(expected3);

      done();
    });
  });

});