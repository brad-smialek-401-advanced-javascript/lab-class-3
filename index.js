'use strict';

const fileReader = require('./lib/reader.js');

// Obtain and assert input
let x = process.argv;
let files = process.argv.slice(2);


console.log('files', files);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
