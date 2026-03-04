// 1 Basic of Node -- Install Checking Install orr nOt
// 2 Hello world and Modules in node.js
// 3 File handling in node.js Part-1 & Part 2 
// 4 Working of node.js 
// 5 Our First http server Import in Node 
// 6 Import express


//  Node.js is A javaScript Running Enviroment to use run File    on Server 
console.log("https://nodejs.org/en -- Link of install ")
console.log("To Varifying Install Orr Not "+"Command Node -v orr npm -v  ")

//  1st Run Program to Node -- (node filename.js)
console.log("Hello Champ");

//  Some build in module Node --
const os = require('os');  // OS is built-in Module in Node 
console.log(os.platform()); // .and platform() is function to Provide your OS to using Which Window like = win32

//  File Handling --
const fs = require('fs');   // ❗ Missing module added

fs.appendFileSync('data.txt', '\nNew Line Added');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//  Here 1st HTTP Server  Import and assign Port No 3000 --
const http = require('http');

const express = require('express'); // HEre Required Express
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Champ Here It is Express"); // using app get method for sending(req, res) on your Server for listen on 3000 is port Request --
});

const server = http.createServer((req, res) => {

    res.write("Hello Aksh Here your Node Server");

    //  using Method --(GET, POST, PUT, DELETE) Exaple GET 
    if (req.method === 'GET') {
        res.write("\nGET Request");
    }

    res.end();
});

//  Now Checking and Install Express --
console.log(" To Checking Install orr Not = " + "npm init -y")
console.log(" To Install npm install Express")

server.listen(3000, () => {
    console.log("Server running on port 3000"); // To Access using http://localhost:3000 
});