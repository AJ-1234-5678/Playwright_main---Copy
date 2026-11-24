//Type alias
type User = {
    username:string
    password:string
};
const user: User = {
    username:"admin",
    password: "admin123"
};
console.log(user);

//Type inference
let name6 = "Matt"
console.log(name6);

let age5 = 25;
//age5 = "twenty five";

function multip(a:number, b:number)
{
    return a*b;
}
console.log(multip(2,5))


//interface
interface LoginData{
    username:string;
    password: string;
}
const loginData: LoginData = {
    username: "standard_user",
    password: "secret_sauce"
};

//Union, intersection

type ID= String |number;
function showID(id:ID){
    console.log(`ID is: ${id}`)
}
showID(101);
showID("abc");

type A = {x:number};
type B = {y:string};

let unionobj:A|B;
unionobj ={x:10};
unionobj = {y:"hello"}
console.log("union object is", unionobj)

let interobj: A & B;
interobj ={x:10, y:"hello"};
console.log("Intersection object is", interobj);




