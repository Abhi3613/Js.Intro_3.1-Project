//  Assingnmet 3.7 JavaScript 

// 31_IIFE 
// 32_Pure Fuctions and Impure function(updated)        33_Function returning functions
// 34_Higher order functions(updated)                               
// 35_Currying in js 36_map() function in js 
// 37_reduce() function in js(updated) 
// 39_find() and findIndex() functions Chapter 

(function () {
   console.log("IIFE executed");
})();

//  Here More Example..
const counter = (function () {
    let count = 0;   
    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        }
    };
})();
counter.increment();
counter.increment();
counter.decrement();
 
// 2️ Pure vs Impure Functions
 function add(a, b) {
    return a + b;
}
console.log(add(3,5));
 
//3. Function Returning Function --
function greet(message) {
    return function(name) {
        console.log(message + " " + name);
    };
}
const sayHello = greet("Hello Aksh");
sayHello("Abhi");

//4.Higher Order Functions (HOF) --> A function that take function as a Argument orr Return a Funnn..son

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));


//5.Currying in JavaScript  --> Function ko multiple single-argument functions me break karna.

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(sum(1)(2)(3)); 

// 6. map() Function
  const numbers = [1, 2, 3, 4];

const squares = numbers.map(function(num) {
    return num * num;
});
console.log(squares);

// More Example thora Complexx
const users = [
    { id: "one", name: "Abhi", age: 21 },
    { id: "two", name: "Aksh", age: 19 }
];

const userNames = users.map(user => {
    return {

        userId: user.id.toUpperCase(),
        fullName: user.name.toUpperCase()
    };
});
console.log(userNames);

//7. reduce() Function
  const nums = [10, 20, 30];

const total = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total);
// Now Yeehaa work name Reduce but work Opposite it's work for reducing your Array in  But “reduce many values → into ONE final value”  Here use Add and tum isse multiply orr suntract kuch m bhi reduce kr sktehh h

  

//8.Now Find() --> Returns first matching element.
const students = [
    { id: 1, name: "Abhi", marks: 85 },
    { id: 2, name: "Aksh", marks: 40 },
    { id: 3, name: "Rahul", marks: 90 }
];
const failedStudent = students.find(student => student.marks < 50);

const failedIndex = students.findIndex(student => student.marks < 50);

console.log(failedStudent);
console.log(failedIndex);
//   Here output = { id: 2, name: "Aksh", marks: 40 },
 


 