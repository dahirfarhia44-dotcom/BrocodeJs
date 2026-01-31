console.log("Hello, World!")
console.log("This is the index.js file.")

//alert("Hello from index.js!")
//window.alert("Hello from index.js!")

document.getElementById("myh1").textContent = "Hello from index.js!"
document.getElementById("myp").textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

//variables
//let, const, var
//1. declaration let x;
//2. assignment x = 5;
//3. initialization let x = 5;

//let age = 25; numbers
//const pi = 3.14;
//var name = "John"; strings
//let isStudent = true; boolean they are either true or false
//let address; undefined
//let phone = null; null

//console.log("typeof age");
//console.log(`you are ${age} years old.`);
//etc

let fullName = "Jane Doe";
let age = 30;
let isEmployed = false;

document.getElementById("p1").textContent = `your name is ${fullName}`;
document.getElementById("p2").textContent = `your age is ${age}`;
document.getElementById("p3").textContent = `is employed: ${isEmployed}`;

//arithmetic operator = operands (values, variables) and operators (+, -, *, /, %(shows reminder), **(squared))
document.getElementById("arithmetic").textContent = "Arithmetic Operations:";

let students = 30;
//augmented assignment operators
students += 5; //students = students + 5
students -= 3; //students = students - 3
students *= 2; //students = students * 2

console.log(students);
students /= 4; //students = students / 4

console.log(students);
students %= 6; //students = students % 6

console.log(students);
students **= 2; //students = students ** 2

//increment and decrement
students++; //students = students + 1
students--; //students = students - 1


console.log(students);

document.getElementById("arith").textContent = "operators precdence (BIDMAS/BODMAS): brackets, indices/orders, division and multiplication, addition and subtraction.";


document.getElementById("user1").textContent = "User Input:";

//easy way to get user input
let userName;
userName = window.prompt("Enter your name:");
console.log(`user name is ${userName}`);


//professional way to get user input
let userName2;
document.getElementById("mybutton").onclick = function(){
    userName2 = document.getElementById("mytext").value;
    document.getElementById("hey").textContent = `Hello, ${userName2}!`;
}

