'use strict';

const fs = require('fs');
const faker = require('faker');

//read args from cli   client interface
let files = process.argv.slice(2)[0];
console.log('process.argv', process.argv);

// let numbers = (Math.random() * 100).toString();



fs.writeFile('./files/test.txt', faker.random.number(), (err) => {
  if (err) throw err;
  console.log('works like a champ');
});

fs.readFile('./files/test.txt', (err, data) => {
  if (err) throw err;
  console.log('Random number is = ' + data.toString());
});


