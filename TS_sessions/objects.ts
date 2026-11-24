const user1 = {
     username: "admin",
     password: "admin123"
};
console.log(user1.username);

//destructuring variables
//array destructuring
let numbers = [10,20,30];
let first = numbers[0]
let second = numbers[1]
let third = numbers[2]


let [first1, second1, third1] = numbers;

//object 
let employee = {
    empname:"Izza",
    role:"Tester",
    experience: 15
};

//console.log(employee.empname);
//console.log(employee.role)
//console.log(employee.experience)


let {empname, role, experience} = employee;
console.log(empname);
console.log(role);
console.log(experience);


