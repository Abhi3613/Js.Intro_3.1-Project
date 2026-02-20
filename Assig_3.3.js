/* Array's -
An Array is an Ordered collection of values stored in a single variable
It Storing data Indexing based 0 to Number of Your data
*/

let data = ["Martin", 15, true, null];

console.log(data[0]);  
console.log(data[2]); 

//  Example More Array inside of Array --

let matrix = [
    [5, 4],
    [4, 7]
];
console.log(matrix[1][1]); 

/* Method's Of Arrays to Perform Operation of Array's data Give   Condition 
1.push()
2.pop()
3.shit() & 
4.Unshift()
*/  
let stackk = [];

stackk.push("A");
stackk.push("B");
stackk.push("C");

console.log(stackk);  // ["A","B","C"]
stackk.pop();
console.log(stackk);  // ["A","B"]

//3 & 4 shift() & unshift() (FIFO)
let queue = ["A", "B", "C"];

queue.shift();  
console.log(queue);  // ["B","C"]

queue.unshift("K");
console.log(queue);  // ["K","B","C"]


// Now Using for Modified Array--

let numbers = [1, 2, 3, 4];
let double = numbers.map(function(num){
    return num + 2;
});
console.log(double);  // [3,4,6,8]

//  filter()
let marks = [95, 97, 98, 99];

let passed = marks.filter(function(mark){
    return mark >= 98;
});
console.log(passed); // filter >= 98 and 99 Ye big ya = hai filter >= 98 Codition se

//  Array Reducing In Single value --
let nums = [99, 98, 97];

let total = nums.reduce(function(sum, value){
    return sum + value;
}, 0);
console.log(total);   

/* 
Now What Happend here..
   1.sum starts from 0
   2.Adds each value
   3.Final result = 294

 */
// Splice + Iteration --

let arr = ["A", "B", "C", "D"];
arr.splice(1, 2, "X", "Y");
console.log(arr);
/* 
Now What Happend here..
   1.Start at index 1
   2.Delete 2 elements
   3.Insert X, Y  Now result Is=["A","X","Y","D"]
 */

//  Now  Iteration --
   let students = ["Abhishek", "Aksh", "Gaurav"];
for(let i = 0; i < students.length; i++){
    console.log(`Student ${i+1}: ${students[i]}`);
}
/* Now What Happend here.. let's see
    give data = student ["Abhishek", "Aksh", "Gaurav"]
    Here Condition = for(let i = 0; i < students.length; i++){
    i = 0 hai tohh i ka value check kro i < students.length; i se 
    student ka length big h tohh  `Student ${i+1} i m 1 add kr do
    orr i++ kr do condition running when i = 3 then Exit loop  Now index starting 1 , 2, 3

     Student 1: Abhishek
     Student 2: Aksh
     Student 3: Gaurav  It your Result
*/

//   For Loop 
let arr1 = ["A", "B", "C"];
   for(let index in arr1){
    console.log(index);       // 0,1,2
}

//  For .. of
for(let value of arr){
    console.log(value);  
}
// Now Object and Calling outside 
let student = {
    name: "Abhishek",
    age: 21,
    marks: [80, 99, 15],
    address: {
        city: "Bhopal",
        pin: 110001
    }
};
console.log(student.address.city); 
console.log(student.address.name); // Bhopal
console.log(student.marks[2]);      // 15

//  Looping in in Obj-- 
for(let key in student){
    console.log(key, student[key]);
}

// Now Function inside Obj --
 let person = {
    name: "Gaurav",
    greet: function(){
        return "Hey Chap !! " + this.name;
    }
};
console.log(person.greet());
 
 