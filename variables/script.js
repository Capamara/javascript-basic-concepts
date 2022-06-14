//Declaring variables
var nome = "Will";
const age = 23;
let goesToSchool = true;
console.log(nome, age, goesToSchool);

//Testing Variables
var priceChips = 10;
var unit = 6;
var total = priceChips * unit;
console.log(total);

//Types of data
var $name = 'Dante'; //String
var $lastname = 'Adams' //String
var $age = 23; // Number
var $goesToUni = true; //Boolean
var $nothing ;// Undefined
var $food = null; // Object
var $symb = Symbol(); // Symbol
var $newObject = {} ;// Object

console.log(typeof $name);
console.log(typeof $age);
console.log(typeof $goesToUni);
console.log(typeof $nothing);
console.log(typeof $food);
console.log(typeof $symb);
console.log(typeof $newObject);

//String + String = Type of -> String
console.log('My name is: ' + $name + ' ' + $lastname);

//String + Number = Typeof -> String
console.log('I have ' + $age + ' years old');

//Easy & Fast way to write a String (Template String)
console.log(`This is the easy way to write a ${typeof($name)}`)

