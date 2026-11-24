//enums

enum Environment {
    QA = "qa",
    UAT = "uat",
    PROD = "prod"
}
const environment = Environment.QA;
console.log(environment);

//Union, Intersection
type Status = "pass" | "fail"|"pending";
let result: Status;
result = "pass";
result = "fail";
result = "pending";

type ID = string | number
let empId: ID;
empId = 100;
empId = "emp"

//intersection
type Person = {
    name: string;
};

type Employee1 = {
    empid: number;
}
type EmployeeDetails = Person & Employee1;

let emp: EmployeeDetails = {
    name: "John",
    empid: 101
};










