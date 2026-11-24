let browsers:string[] =["chrome", "firefox", "edge"];
console.log(browsers[0]);

//push, pop, unshift, shift, splice
browsers.push("safari");
console.log(browsers);

browsers.pop();
console.log(browsers);

browsers.unshift("safari");
console.log(browsers);

browsers.shift();
console.log(browsers);

browsers.splice(1,2,"test");
console.log(browsers);

console.log(browsers.length);

//arrays, tuples
let fruits:string[] =["apple", "orange", "mango"];

let student: [number, string, boolean] = [2, "Amy", true];

//Readonly tuples
let point:readonly[number, number] = [10,20];
//point.push(30);

//optional tuple elements(?)
let user:[string, number?];
user = ["Bob"];
user = ["Bob", 25];

let user1 : [string, number] = ["Alice", 25];
user1.push(30);
user1.push("admin");
//user1.push(true);
console.log(user1);



//map, set
let browsers2 = new Set();
browsers2.add("chrome");
browsers2.add("firefox");


let user5 = new Map();
user5.set("admin", "admin123");
console.log(user5.get("admin"));




