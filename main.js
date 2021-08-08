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

// Object literals
const person = {
    firstName: 'Carter',
    lastName: 'Borchetta',
    age: 22,
    hobbies: ['coding', 'snowbaording', 'pc building' ],
    // Can even put an object in an object
    address: {
        street: 'fake street',
        city: 'fake ciity',
        state: 'fake state'
    }
}
console.log(person)
console.log(person.firstName, person.address)
console.log(person.hobbies[1])

// Can pull things out with **Deconstruction**
const { firstName,lastName } = person
// This seems to pull the object's properties out of the the
console.log(firstName)

// Can add properties whenever
person.email = 'fake@email.com'
console.log(person)

// Arrays of Objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Take drugs',
        isComplete: false
    },
    {
        id: 3,
        text: 'Make dinner',
        isComplete: false
    }
]

console.log(todos)
console.log(todos[1].text)

// We can easily convert this to JSON because the format is basically the same
// except for the use of "" around keys and text
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

// For Loops
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// While Loops
let i = 0

while (i <10) {
    console.log(i)
    i++
}

// Loop through array
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i])
}

// Fancier way = without looking at indices
for (let todo of todos) {
    console.log(todo.text)
}


// High Order Array Methods
// These methods take in functions that they run on the array

// forEach
todos.forEach(function(todo) {
    console.log(todo.text)
})

// Returns an array that is the result of the original array with a func done to it
const todoTextOonly = todos.map(function(todo) {
    return todo.text
})
console.log(todoTextOonly)


// Returns an array with only the elements that met the condition
const todoCompletedOnly = todos.filter(function(todo) {
    return todo.isComplete === true
})
console.log(todoCompletedOnly)
// Can also **chain** these high order array methods


// Conditionals

const d = '10'

if (d == 10) {
    console.log(d)
}
// This prints becuase == doesn't care about data type. Use === to match datatype

//This doesn't work because we're requiring a match on datatype 
const e = '10'

if (e === 10) {
    console.log(e)
}