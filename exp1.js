// Activity 1

var a=10; a=200
let ab=20; ab=200
console.log(a)
document.writeln(a);
console.log("\n");
document.writeln("<br>");

// Activity 2

// Var is not a block scope
{
    var x = 10;
    console.log("Inside Block", x);
    document.writeln("Inside Block " + x + "<br>");
}

console.log("Outside Block", x);
document.writeln("Outside Block " + x + "<br>");

console.log("\n");
document.writeln("<br>");

// let is Block Scope
{
    let y = 20;
    console.log("Inside Block", y);
    document.writeln("Inside Block " + y + "<br>");
}
// console.log("Outside Block", y); ---> Gives error y not defiend

console.log("\n");
document.writeln("<br>");

// const is a block scope + has constant value
{
    const z = 30;
    console.log("Inside Block", z);
    document.writeln("Inside Block " + z + "<br>");
}
// console.log("Outside Block", z); ----> Gives error z not defiend 

console.log("\n");
document.writeln("<br>");

// Activity 3

let name = "Tejas";
let rollNo = 9;
let branch = "AIML";
let emaiId = "tejasbabar335@gmail.com";

console.log("Name : ", name);
document.writeln("Name : " + name + "<br>");

console.log("Roll No is : ", rollNo);
document.writeln("Roll No is : " + rollNo + "<br>");

console.log("Branch : ", branch);
document.writeln("Branch : " + branch + "<br>");

console.log("Email ID : ", emaiId);
document.writeln("Email ID : " + emaiId + "<br>");
console.log("\n");
document.writeln("<br>");
// Activity 4
// Check number oddd or even
let num = 45;
if(num % 2 == 0){
    console.log("Number is Even");
    document.writeln("Number is Even<br>");
}
else{
    console.log("Number is odd");
    document.writeln("Number is odd<br>");
}
console.log("\n")
document.writeln("<br>");
// Check student pass or fail
let marks = 35;   // change marks here
if (marks >= 40) {
    console.log("Student Passed");
    document.write("Student Passed");
} else {
    console.log("Student Failed");
    document.write("Student Failed<br>");
}
// Activity 5
let i = 0;
for(i = 0; i < 11; i++){
    console.log(i);
    document.writeln(i + "<br>");
}