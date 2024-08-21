/*var five = 5;
console.log("5"+five);*/
// varibleDeclarationType variableName = value; 

// re declare and reassign values
// global scope

var a = 5;
var b = 10.5;
var b = 15;
{
    // global scope 

    var z = 50;
    // console.log("value of z",z);
}

console.log("value of z",z);

// cann't re declare but reassign value
// block scope
let x = 5
x = 10;
console.log("value of x",x)

{
    // block scope 

    let z = 60;
    // console.log("value of z",z);
}

console.log("value of z",z);

// cann't re declare and reassign value
// block scope

{
    // block scope 

    const z = 100;
    // console.log("value of z",z);
}

// console.log("value of z",z);



const y = 20;
// y = 10;
console.log("value of y",y);

var fullName = "Test user";
console.log(typeof fullName)
var result = a+b;
document.write("<h1>values of add two numbers<h1>",result)
console.log("value of a plus b", result);

// document.getElementById("addNumbers").innerHTML = result;
var myElement = document.getElementById("addNumbers");
myElement.innerHTML = result;
console.log(myElement) 