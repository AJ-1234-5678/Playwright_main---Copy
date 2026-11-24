let username:string = "John";
username = "Tom";

const browser:string ="chrome";
//browser = ""

let browsername ="firefox";
//browsername = 1;

//let browsername = 4;

//string, number, boolean
let price:number =30;

let isLoggedIn: boolean = true;

//undefined, null
let username1;
console.log(username1);

let username2 = null;
console.log(username2);

//any, unknown
let value:any = "Hello"
value= 100;
value=true;
console.log(value);

let response:unknown;
response = "Hello";
response = 200;
response = "test";
//console.log(response.toUpperCase())
if (typeof response === "string"){
    console.log(response.toUpperCase());
}





