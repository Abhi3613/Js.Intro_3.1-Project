
//  -- Topic ->

//1 .DOM MAinpulation & DOM Selector
//2 .Create an Element javaScript
//  and Remove Elements 
//3 Intro Async 
//4 setInterval()API in js
//5 _Emoji Guessing Game Project 
//  Part-1 _Emoji Guessing Game 
//  Part-2 _Promise in JS
//6 _fetching API()


// 1 .DOM MAinpulation & DOM Selector ->
// DOM is Help To Integrate To HTML Elements In Js
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("tag")
document.querySelector("selector")
document.querySelectorAll("selector")

// Here Some DOM Selector's -- 

document.querySelector("#id")       // Select id
document.querySelector(".class")   // Select class
document.querySelector("div")     // tag
document.querySelectorAll(".class")  // Select All Matchingin cls  

// 2. Create Elements
let newDiv = document.createElement("div Elements");
newDiv.innerText = " And Here New Element";
document.body.appendChild(newDiv);

// Method Using in 
parent.append()
parent.prepend()
parent.after()
parent.before()

// Here Remove Elements --
element.remove();  

//  Topic Aync Function -- Mens Run 1 task at a time then Moving Other Operation's
setTimeout(() => {
    console.log("Hey Champ Comming after 2 sec");
}, 2000);

// setInterval() API
let interval = setInterval(() => {
    console.log("Repeating every 1 second");
}, 1000);

//  Emoji Gussing Game --

let answer = "bat";
 let userGuess = prompt("🏏Guess the Object");

if(userGuess === answer){
    alert("Correct!");
 } else {
    alert("Wrong!");
}

//  Scoring multiple Question --

let score = 0;

let questions = [
    {emoji: "🏸", answer: "dadminton"},
    {emoji: "🏑", answer: "Hocky"}
];

questions.forEach(q => {
    let guess = prompt(`${q.emoji} Guess:`);
    if(guess === q.answer){
        score++;
    }
});
alert("Your score: " + score);

//  Promise --

let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve(" Hey Good Champ!");
    } else {
        reject("Trying More!");
    }
});

//  fetch() API 
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    
 //  We Are Using Asyn/Await use Try Catch .. 
 async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
getData();
   
    
 