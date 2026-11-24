//for loop
for(let i=0;i<5;i++){
    console.log(i)
}

//for.. of
let browsers = ["chrome", "edge", "firefox"]
for(let browser in browsers) {
    console.log(browser);
}

//for..in
let user = {
    name: "John",
    role:"Tester"
};
for(const key in user) {
    console.log(key)
}

//functions
function login() {
    console.log("user1")
}
login();

function login1(username:string, password:string) {
   console.log(username);
   console.log(password);
}

function add(a:number,b:number) : number {
    return a+b;
}
console.log(add(10,20));

const add1 = (c:number, d:number): number => {
    return c+d;
};
console.log(add1(10,10));

const add2 = (g:number, h:number) => g+h;


function login5(username4:string, password4?:string) {
    console.log(username4);
    console.log(password4);
}
login5("admin")
login5("admin", "admin123")

function login6(username5:string, browser:string="chrome") {
    console.log(username5);
    console.log(browser);
}
login6("admin");
login6("admin", "firefox");