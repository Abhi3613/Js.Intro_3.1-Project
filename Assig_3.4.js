/*Nesting Obj --> That means a main obj              containig Multiple inside Child Obj 
*/
const company = {
  name: "Aksh",
  departments: {
    frontend: {
      head: "Abhishek",
      employees: [
        { name: "Abhi", skills: ["React", "JS"] },
        { name: "Aksh", skills: ["CSS", "HTML"] }
      ]
    }
  }
};
console.log(company.departments.frontend.employees[0].skills[1]);
//  for Checking If not exit return - undefined
console.log(company.departments.backend?.head);

// 2 Now.. Iterating Over Object's 
const obj = { a: 1 };
Object.prototype.test = 100;
for (let key in obj) {
  console.log(key); 
}
// Here O/p = a  test   // unwanted

// Example More Using ForEach
const user = { name: "Raj", age: 22 };

Object.entries(user).forEach(([key, value]) => {
  console.log(`${key} => ${value}`);
});

// 3. Topic Pass by Value And Pass by Reference (How to Using Memory) 
let obj1 = { x: 10 };
let obj2 = obj1;

// Example Uding Function -
 function update(obj) {
  obj.x = 70;
}
let data = { x: 20 };

update(data);
console.log(data.x);   // 0/p=  70

//4️. Shallow Copy vs Deep Copy (Developer Level)
// 1.Shallow Copy
const original = {
  name: "Abhishek",
  address: {
    city: "Delhi"
  }
};
const copy = { ...original };
console.log(original.address === copy.address); // return = True because Original Address is Now store in Copy so original.address === copy.address === True

// 2 Now Deep
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}