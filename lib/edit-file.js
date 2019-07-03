'use strict';

const fs = require('fs');
const faker = require('faker');
const files = process.argv;

let numbers = (Math.random() * 100).toString();



fs.writeFile('./files/test.txt', numbers, (err) => {
  if (err) throw err;
  console.log('works like a champ');
});

fs.readFile('./files/test.txt', (err, data) => {
  if (err) throw err;
  console.log('Random number is = ' + data.toString());
});


