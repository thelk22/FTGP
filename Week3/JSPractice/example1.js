alert("Hello, this JS is from an external file!");
console.log("Hello from the console - external JS file");

// Next lesson: variables
// All variables are of primitive or object type
// Primitive types: numbers, strings, bools, undefined
// Object types: null, all sorts of other things (standard ones and user defined) such as arrays and functions
// let, var, const
const x = 35; // unchangeable
let y = 30;
console.log(y);
y = 50;
console.log(y);
var z = 32;
console.log(z);
z = 30;
console.log(z);

console.log(typeof z);
z = "luke";
console.log(typeof z);

z = undefined;
console.log(z);
console.log(typeof z);

z = null;
console.log(z);
console.log(typeof z);

let a = Math.pow(2, 3);
console.log(a);

// Note: this is JSON (JavaScript Object Notation)
// Objects in JavaScript are represented as a bunch of key, value pairs!
let obj = {};
console.log(typeof obj);
obj = { id: 1, name: "Luke" };
console.log(obj);

a = Number.POSITIVE_INFINITY;
console.log(a);

a = 0 / 0;
console.log(a);
console.log(typeof a);

// Pop up for user input
y = prompt("what is your name?");
console.log(y);

y = "My name is Luke";
console.log(y.substring(0, 4));

// Regular expressions
let text = "Testing: 1, 2, 3";
let pattern = /\d+/g;
console.log(pattern.test(text));
console.log(text.match(pattern));

// Booleans
let d = "5";
console.log(d == 5); // convert variables to same type before comparison
console.log(d === 5); // no type conversion, check value and type

// Note: distinct objects are never equal because they are located elsewhere in memory
let obj1 = { id: 1 };
let obj2 = { id: 1 };
console.log("Are objects equal? loosly or strictly");
console.log(obj1 == obj2);
console.log(obj1 === obj2);

let s = "string";
console.log(s.toUpperCase());

obj = { x: 1 };
console.log(obj);
obj.x = 3;
obj.y = 4;
console.log(obj);

// For loops
for (var i = 0; i < 4; i++) {
  console.log(i);
}

// Loop over object
obj = { id: 1, name: "luke" };
for (const [name, value] of Object.entries(obj)) {
  console.log("The key is: ", name, " The value it holds is: ", value);
}

// Serialisation
let serialised = JSON.stringify(obj);
console.log(serialised);

// Deserialisation
newObj = JSON.parse(serialised);
console.log(newObj);

// Template literals using the backtick character `
// You can use these to insert variables into a string; pretty useful!
var toPrint = 123;
let printed = `---
   a is: ${toPrint}
---`;
console.log(printed);

// Creating an object containing methods
coordinate = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toSum: function () {
    return this.x + this.y;
  },
  toProduct: function () {
    return this.x * this.y;
  },
};
console.log(coordinate.toString());
console.log(coordinate.toSum());
console.log(coordinate.toProduct());
