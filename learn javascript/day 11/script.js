const fruits = ["Apple","Mango","Banana","Grapes","Apple","Orange",];
const cars = ["Fortuner","Audi","BMW"];
// fruits.push("Grapes");
// fruits.pop();
// fruits.unshift("Grapes");
// fruits.shift();

// delete fruits[0];

// const sliceArray = fruits.slice(1,3)
// fruits.splice(1,2,"Grapes","Strawberry")
// fruits.splice(fruits.length-1,1,"Grapes")
// const newArr =  fruits.concat(cars);
// const newArr =  [...fruits,...cars];
// const findItem = fruits.at(2);
const newArr = cars.join("-");
const myString = cars.toString();
// document.write(typeof myString);

// Search Methods

// const findIndex = fruits.indexOf("Apple");
const findIndex = fruits.lastIndexOf("Apple");
// console.log(findIndex);
fruits.splice(findIndex,1);
const checkValue = fruits.includes("Grapes");
// document.write(checkValue);

const myNumbers = [23,45,74,34,47];
// const findNum = myNumbers.find(findNumber);
// const findNum = myNumbers.findLast(findNumber);
// const findNumIndex = myNumbers.findIndex(findNumber);
const findNumIndex = myNumbers.findLastIndex(findNumber);

function findNumber(num){
    console.log(num);
    return num > 45;
}
document.write(findNumIndex);