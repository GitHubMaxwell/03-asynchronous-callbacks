const read = require('../lib/reader.js');

jest.mock('fs');
// const read = require('../lib/reader');

describe('Reader Module', () => {
//   it('when given a bad file, returns an error', () => {
//     // Note that the actual path here doesn't really matter.
//     // If we weren't mocking, it would.  The "fs" module would need
//     // to find the actual file.
//     //
//     // Also note that this file is named "bad.txt".  Our mock fs module
//     // will always return an error if a file has the word "bad" in its name
//     let file = `${__dirname}/../../data/bad.txt`;
//     read(file, (err,data) => {
//       expect(err).toBeDefined();
//     });
//   });

//   it('should callback with error for any non-existent file', (done) => {
//     let file = `${__dirname}../data/appples.txt`;
//     read(file, (err) => {
//       expect(err).not.toBeNull();
//       done();
//     });
    
//   });

//   it('should callback with error for any non-existent file', (done) => {

//     read([__dirname + '../data/apples.txt', 'missing.txt'], (err) => {

//       expect(err).not.toBeNull();
      
//       done();
//     });
//   });

  it('should callback with error for any non-existent file', (done) => {

    read([], (err,data) => {
      expect(err).not.toBeNull();
      done();
    });
  });
//   it('when given a real file, returns the contents', () => {
//     let file = `${__dirname}../data/apples.txt`;
//     read(file, (err,data) => {
//       expect(err).toBeUndefined();
//       // We don't need to care what the text is, only that we got back a string
//       // That's the interface of our reader module: Give a file+cb, get back stringified  contents
//       expect(typeof data).toBe('string');
//     });
//   });
});