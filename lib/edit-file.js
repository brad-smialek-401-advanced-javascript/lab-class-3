'use strict';

const fs = require('fs');
const faker = require('faker');
const files = process.argv;

let numbers = (math.random() * 100).toString();

let dataToWrite = [];
for 

fs.writeFile('./files/test.txt', 'Hi', (err) => {
  if (err) throw err;
  console.log('works like a champ');
});

fs.readFile('./files/test.txt', (err, data) => {
  if (err) throw err;
  console.log('Random number is =' + data.toString());
});



// fs.readFile(files[2], dataToWrite, function (err)) {
//   if (err) throw err;
//   console.log('Saved Me!');

// };
