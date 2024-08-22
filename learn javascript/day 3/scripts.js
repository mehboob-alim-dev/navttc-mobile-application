// variable declaration
var x;

// variable assignment

// Arithmetic operators

x = 2;
const y = 9;
var result = x + y;
var result = y - x;
var result = y * x;
var result = y / x;
var result = y % x;
var result = x**y;
var result = Math.pow(y,x)

console.log("value of result",result)

// Assignment Operators

let a = 5;

a += 10;
// a = a + 10;
a -= 10;
a *= 10;
a /= 10;
a %= 2;
a **= 2;

console.log("value of a",a)
// increment operator
let value = 100;
value++;

// value = value + 1;

// decrement operator
value--;
// value = value - 1;

console.log("value",value)

// Counter application 

let counter = 0;

function updateDisplay() {
    document.getElementById("counter").innerHTML = counter;
}

function incrementHandler() {
    counter+=5;
    updateDisplay();
}

function decrementHandler() {
    counter-=5;
    updateDisplay();
}

// Initialize the display
updateDisplay();

// Comparision Operator

let j = 10;
let k = 10;

// let resultOfComparisionOperator = 5 == 10;
console.log("equal",j == k)
console.log("equal and also type is same",j === k)
console.log("not equal",j != k)
console.log("not equal and also type is not same",j !== k)

console.log("less than",j < k)
console.log("less than and equal",j <= k)
console.log("greater than",j > k)
console.log("greater than and equal",j >= k)

// string operators

let valueOfA = "text";
let valueOfB = "test";

console.log(valueOfA == valueOfB)

// Logical Operator

let m = true;
let n = false;

console.log("And operator", m && n);
console.log("or operator", m || n);
console.log("not operator", !((5 > 4) && (6 > 5)));

const booleanValue = true;
if(!booleanValue){
    alert("alert")
}
console.log(!booleanValue)

// type operator

console.log(typeof valueOfA)