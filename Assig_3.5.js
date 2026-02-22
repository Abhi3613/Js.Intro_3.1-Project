//  Assing  Chapter 3.5 J.s  Here 
// 1 – Execution Context

console.log(a);  
var a = 5;

function greet() {
    console.log("Hello");
}
greet();

// 2 – Function + Scope
var x = 10;
function test() {
    var y = 20;
    console.log(x);  // 10 ( here is global)
    console.log(y);  // 20 ( and  local)
}

test();
console.log(x);  // 10
// console.log(y);Error (y not accessible outside)
 

// 3 – Variable Shadowing
var a1 = 100;
function demo() {
    var a1 = 50;   
    console.log(a1);
}
  demo();
console.log(a1);
//  O/p Is 50 and 100



//  4.Call Stack
function one() {
    console.log("One");
    two();
}
function two() {
    console.log("Two");
}
one();

//  Hosting DevTosls simple example 
console.log(a); // 1st memory pahse Exe = Undefined
var a = 5; // 2nd get a= 5