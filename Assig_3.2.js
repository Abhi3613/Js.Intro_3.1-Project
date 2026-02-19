/* -- Assignment 3.2 javaScript --
1. Ternary Operator -->
Is a Short From of If Else Statement It use to check Condition and return a value in a single line of code
syntax--
condition ? expression_if_true : expression_if_false;
*/

let marks = 50;

let result = marks >= 50 ? "Pass" : "Fail";
console.log(result + "Hey Only Pass");

/* Function --> 
Function is Reusable block of code to perform a specific task and  avoid repeating same code multiple time
and also give you need to calling 
we are using 1. single function 
             2. With Parameter's(a,b)
             3.Functions and Scope
             4.Function within Function
syntax--
function functionName() {
    // code
}
*/
function greet() {
    console.log("\n Hello World");
}
greet();

//  Function with Parameter's
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 5));

/*  Functions and Scope --> 
Scope defines where is a variable can be accessed in a program.
Type's 
1.Local 
2.Global
*/
// 1. local
function testing() {
    let age = 20;
    console.log(age);
}
testing();

// 2.Global
let name = "Abhishek";

function showName() {
    console.log(name);
}
showName();

//  Now Function within Function like Nested Function--

function HeyIoutside() {
    console.log("Outer Function");

    function HeyIInside() {
        console.log("Inner Function");
    }
   HeyIInside();
}
HeyIoutside();

//  Now Function Expression--
const Abhi = function() {
    console.log("Hello champ");
};
Abhi();








