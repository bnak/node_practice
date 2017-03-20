//const reverseString = require('./reverseString');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please provide input string to be reversed: ', (answer) => {

  console.log(`Reverse string: ${answer}`);

  rl.close();
});

//reverseString.reverseString()
// console.log(`The result is: ${result}`)  