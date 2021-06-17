let num = 1001;

//Returns 'undefined'.
//console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
//String(num).length



//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//let dec = 3.14159
//String(dec).length - 1


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
//const input = require('readline-sync');
//let num = input.question('Enter an integer or decimal: ');

let dec = String(num).indexOf('.');

if (dec === -1) {
  String(num).length;
} else {
  String(num).length - 1;
}
