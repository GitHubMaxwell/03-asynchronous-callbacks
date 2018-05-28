'use strict';

let read = require('../lib/reader.js');

describe('Reader Module', () => {


  it('should callback with error for a non-existent file', (done) => {
    read(['missing.txt'], (err) => {
      expect(err).not.toBeUndefined();
      done();
    });
  });

  // it('should callback with file contents of one file', (done) => {
  
  //   const expected = 'words about apples'; 

  //   read([`${__dirname}/../data/apples.txt`], (err, data) => {

  //     expect(err).toBeUndefined();
  //     let actual = data.toString();
  //     expect(actual).toBe(expected);

  //     done();
      
  //   });
  // });

  it('should callback with file contents of multiple files in order', (done) => {
  
    let paths = [];
    for (let item of ['cucumbers','apples','bananas']) {
      paths.push(__dirname + '/../data/' + item + '.txt');
    }
    let expected, actual;
    read(paths, (err, contents) => {
      expect(err).not.toBeUndefined();
      expected = true;
      actual = contents[0].toString().startsWith('cucumber');
      expect(actual).toBe(expected);

      expected = 'words about apples'; 
      actual = contents[1].toString();
      expect(actual).toBe(expected);

      expected = 'words about bananas'; 
      actual = contents[2].toString();
      expect(actual).toBe(expected);

      done();      
    });
  });

});