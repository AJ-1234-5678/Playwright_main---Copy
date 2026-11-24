export{}

let name = "tessa";
let age = 20;

console.log("My name is "+name+ " and I am " +age+" years old");

console.log(`My name is ${name} and I am ${age} years old`);

//let username ="standard_user"
//let url = `https:example.com/user/${username}`

//Tuples
let student10: [number, String, boolean] = [2, "Amy", true]
console.log(student10)

//read only 
let point:readonly [number, number] = [10,20]
//point.push(30)

let user5: [String, number?];
user5= ["Bob"];
user5= ["Bob", 25];
console.log(user5)

//object
let student15 ={
    studname: "tessy",
    studage: 20,
    studept: "ece"
}
console.log(student15)
console.log(student15.studage)

let person1: {
    id:number;
    personame:string;
};
person1 = {
    id:401,
    personame:"Dev"
};
console.log(person1.id)

//JSON object creation -
//{
//"key1": value1,
//"key2": value2
//}
//stringify, parse
const car ={
    name: "Benz",
    price5: 450000000
}
const jsonobj = JSON.stringify(car)
console.log(jsonobj)

const data =
`{
  "name1" :  "Izza",
  "dept" : "ece",
  "age" :20
}`
let jsobj = JSON.parse(data)
console.log(jsobj);

//destructuring variables
let numbers = [10,20,30];
//let first = numbers[0];
//let second = numbers[1];

let [first,second, third] = numbers

let employee = {
    name5: "Jimi",
    role: "Tester",
    experience: 15
};
console.log(employee.name5);

let {name5, role, experience} = employee;
console.log(name5, role, experience);
