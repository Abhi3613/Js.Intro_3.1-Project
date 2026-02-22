// Assignment 3.6 Js Topic  
// 26_Scope in js 
// 27_Scope Chaining 
// 28_More on let and var
// 29_Closures 
// 30_Arrow function

// 1. Scope in js 
let name = "John";
function greet() {
  console.log(name); 
}
// 2. function Scope
function greet() {
  let message = "Hello";
  console.log(message);
}
console.log(message); 

// 3. Block scope
if (true) {
  let age = 25;
  console.log(age); // Works
}
console.log(age); // Here Give  Error becuse same Printing Calling 

// 4. What is Scope Chaining --> JavaScript looks for variables from inside to outside.

let a = 10;

function outer() {
  let b = 20;

  function inner() {
     let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

//Hosting 
console.log(x); // gIVE undefined
var x = 5;

// 5. Closures --
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}
let counter = outer();
counter(); // O/p = 1
counter(); // And Here give o/p = 1

//  What is Arrow function -->
// Arrow function is new interoduce in ES6 make code more Clean and  give for Specially for backend functionalies

const add = (a, b) => {
  return a + b;
};

//   Example
const obj = {
  name: "John",
  greet: function() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};
obj.greet(); // John 