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
/*let userName;
userName = window.prompt("Enter your name:");
console.log(`user name is ${userName}`);*/


//professional way to get user input
let userName2;
document.getElementById("mybutton").onclick = function(){
    userName2 = document.getElementById("mytext").value;
    document.getElementById("hey").textContent = `Hello, ${userName2}!`;
}

//constants dont reassign unlike let or var
const gravity = 9.81; //m/s^2
//let mass = 72; //kg

document.getElementById("btn").onclick = function (){
    mass = document.getElementById("txt").value;
    mass = Number(mass);
    weight = mass * gravity;
    document.getElementById("gravity").textContent = `Weight is ${weight} N`;
}


const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const counterlebel = document.getElementById("counterlebel");

let count = 0;
increasebtn.onclick = function (){
    count++;
    counterlebel.textContent = count;
}
decreasebtn.onclick = function() {
    count--;
    counterlebel.textContent = count;
}

resetbtn.onclick = function() {
    count = 0;
    counterlebel.textContent = count;
}


//math

Math.PI;
Math.E;
console.log(Math.E)
console.log(Math.PI);

let x = 3.7;
let y = -4;
let z;

z = Math.round(x); //4
console.log(z);

z = Math.floor(x); //3 will round down
console.log(z);

z = Math.ceil(x); //4 will round up
console.log(z);

z = Math.trunc(x); //3 will just cut off decimal
console.log(z);

z = Math.sign(y); //-1 will check if number is positive or negative
console.log(z);

z = Math.pow(2, 3); //2^3 = 8 will do exponentiation(power)
console.log(z);

z = Math.sqrt(64); //8 will do square root
console.log(z);

z = Math.abs(y); //4 will give absolute value
console.log(z);

z = Math.min(3, 5, -2, 10, 0); //-2 will give min value
console.log(z);

z = Math.max(3, 5, -2, 10, 0); //10 will give max value
console.log(z);

z = Math.random(); //0 to 1 will give random decimal number between 0 and 1
console.log(z);

z = Math.floor(Math.random() * 10) + 1; //1 to 10 will give random whole number between 1 and 10
console.log(z); 

//we additionally have the sine, cosine, tangent functions and more in the Math object

//if statements and comparison operators
//== equal to
//=== strictly equal to (value and type)
//!= not equal to
//!== strictly not equal to
//> greater than
//< less than
//>= greater than or equal to
//<= less than or equal to

let testAge = 26;

if (testAge >= 18){
    console.log("you are welcome to use this site.");
}
else {
    console.log("you are not allowed to use this site.");
}

let time = 7; //24 hour format
if (time >= 6 && time < 12){
    console.log("Good morning!");
}
else if (time >= 12 && time < 18) {
    console.log("Good afternoon!");
}

let isStudent = false;
if (isStudent === true){
    console.log("you get a discount!");
}
else {
    console.log("you dont get a discount.");
}

let driverAge = 20;
let hasLicense = false;

if (driverAge >= 18 && hasLicense === true){
    console.log("you can drive.");
}
else {
    console.log("you cannot drive.");
}

//ternary operator
//condition ? expr1 : expr2

let age2 = 17;
let canVote = (age2 >= 18) ? "yes you can vote." : "no you cannot vote.";
console.log(canVote);

let light = "green";
let canDrive = (light === "green") ? "you can drive." : "you must stop.";
console.log(canDrive);

//switch statements
let day = 7;
let dayName;

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Today is ${dayName}.`);
