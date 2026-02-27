// JavaScript 3.8  Tpoic Concept-
// This keyword 
// Constructor function
// prototype
// prototype chain
// Array Prototype 
// Object.create 
// Call,apply and bind methods
// Object Destructuring 
// Array Destructuring

//  This keyword 
const user = {
  name: "Abhishek",
  name1: "Gaurav",
  greet() {
    console.log(this.name);
    console.log(this.name1);
  }
};
user.greet();
//  Access With Parameter's
const users = {
  name: "Abhishek",
  name1: "Gaurav",
  greet(nun) {
    console.log(nun.name);
    console.log(nun.name1);
  }
};
user.greet();

//   Good Way To USe Arrow Funn..sun Without This --

const userss = {
  name: "Abhishek",
  name1: "Aksh",
  greet: () => {
    console.log(userss.name);
    console.log(userss.name1);
  }
};
userss.greet();

// -- Constructor -- Concept Create Empty obj -> Set this to that obj -> link prototype -> Return obj

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Abhi", 15);
const p2 = new Person("Aksh", 19);

//  Prototype Every function has Prototype Property --
function User(name) {
  this.name = name;
}
User.prototype.greet = function() { // Prototype
  console.log("Hello " + this.name);
};

// -- Array Prototype -- 
const arr = [1,2];
console.log(arr.push (3));
console.log(arr)
//-- Here Now I add Own Method with Prototype --
Array.prototype.sayHi = function() {
  console.log("Hello Array");
};

arr.sayHi();

// Object.create() In Js --

const userMetods = {
    good(){
        console.log("Hey Champ " + this.name);
        console.log("Hey Champion " + this.name1);
    }
};

const contumer = Object.create(userMetods);
contumer.name = "Abhishek";
contumer.name1 = "Aksh";

contumer.good();

//  Call() apply() bind() Using manually control this

function greet(city) {
  console.log(this.name + " from " + city);
}

const user1 = { name: "Abhi" };
greet.call(user1, "Delhi");
greet.apply(user1, ["Mumbai"]);

const newFunc = greet.bind(user1, "Lucknow");
newFunc();

//  Object Destructuring --
const user2 = {
  name: "Abhi",
  age: 21
};
const { name, age } = user2;
const { name: surname } = user2; // I want to name to rename surname
 const { country = "India" } = user2;  // Add Extera Information..
 console.log(name);
 console.log(age);
console.log(country);
console.log(surname);
  
//  Here Trying Nested Data -- in Accessing in boj 
const student = {
  name: "Abhi",
  marks: { math: 90 }
};
const { marks: { math } } = student;

//  Simple Example Array Destructuring --
const arr1 = [10, 20, 30];

const [a, b, c] = arr1;
console.log(a); // 10

const arr2 = [100, 200, 300, 400];
const [first, , third] = arr2; // Here Skip Middle Value 200
console.log(third); // 300

//  now Modern way to Using inheritace Use class + extends + super