// Some console methods
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// Variables
// var, let, const
// Not good to use var becuase it is globally scoped
// - Can cause conflicts
// let and const have **block level** scope
// let allows reassigning values
// const is immutable = its a constant, can't be **directly reassigned**
// **ALWAYS use const unless you know you will reassign the value**

// Data Types
// String, Number, Boolean, null, undefined, Symbol

const name = 'Carter'
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // This will also be undefined

console.log(typeof age);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template Sting is the new way
console.log(`My name is ${name} and I am ${age}`);


// String Properties
// Properties don't end with (), thise are methods
const s = 'Hello World';
console.log(s.length);

// String Methods
console.log(s.toUpperCase());
console.log(s.substring(0,5).toLowerCase());

// Split for strings in js = splits it into an array
console.log(s.split('')); // '' will split it by letter
console.log(s.split(' '));


// Arrays 
const numbers = new Array(1,2,3,4,5); // An old way to create arrays
console.log(numbers);

// In js, can have multiple data types in an array 
// Arrays can also be dynamically resized
const fruits = ['apples', 'pears', 'oranges', 10, true]
console.log(fruits);

// Array access
console.log(fruits[1]);

// You can add in a weird way
// Its fine to use const for this becuase we aren't directly reassinging it, just modifying it
fruits[5] = 'grapes'
console.log(fruits);
// Much less sketchy add to end
fruits.push('mangos')
console.log(fruits);
// Add to front
fruits.unshift('clementine')
console.log(fruits)
// Remove last one
fruits.pop()
// Get index of an element
console.log(fruits.indexOf('oranges'))

