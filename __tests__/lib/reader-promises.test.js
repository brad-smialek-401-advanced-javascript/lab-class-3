'use strict';

jest.mock('fs');

const reader = require('../../lib/reader.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      
      expect(err).toBeDefined();
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});

// HINT: Use util.promisify() to make fs.readFile work like a promise ...
// Do you need to nest?
// You'll need to change the tests to work with promises instead of callbacks.