//creating variables using var  let and const

// let:let  is used to declare variables that can be reassigned later. It has block scope and is not hoisted like var.

let salary = 100;
salary = salary+30;
console.log(salary);

let a = 10;
a= 30;
a= 40;
console.log(a);

// const: const is used to declare variables that cannot be reassigned. It also has block scope and is not hoisted like var.
// for consts used fixed values use const

const applicationname = "QA Master";
// applicationname = "ravi"; //changing is not possible because java is dynamic language and const is used to declare variables that cannot be reassigned. It also has block scope and is not hoisted like var.
console.log(applicationname);

//var is used to declare variables that can be reassigned later. It has function scope and is hoisted to the top of its scope.
var employeename = "ravi"
employeename = "mohan"
employeename = "kumar"
var employeename = 20
console.log(employeename)