
//1. Write a console app that accepts a string as input and outputs the provided string in reverse

var reverse = require('reverse-string');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please provide input string to be reversed by characters: ', (answer) => {
  reversed = reverse(answer);
  console.log(`Reverse string: ${reversed}`);

  rl.close();
});

