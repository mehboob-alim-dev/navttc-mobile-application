// function declaration with two paramters a and b
function addTwoNumbers(a,b){
    return a+b
}
function subtractTwoNumbers(a,b){
    return a-b
}
function multiplication(a,b){
    return a*b
}
const division=(a,b)=> a/b;
const onChangeHandler=()=>{
    const a = document.getElementById("value1").value;
    const b = document.getElementById("value2").value;
    const result = addTwoNumbers(Number(a),Number(b))
    console.log("result",result)
}

// let a = 5;
// let b = prompt("enter value of b");
let a = 5;
let b = 5;
console.log("values",typeof a, typeof b)
// function call with two argument
console.log(addTwoNumbers(parseFloat(a),parseFloat(b)));
console.log(addTwoNumbers(Number(a),Number(b)));
console.log(subtractTwoNumbers(+(a),+(b)));
console.log(multiplication(220,50));
console.log(division(Number(a),Number(b)));

const age = 16;

if(age<18){
    console.log("this is too yound");
}else{
    console.log("this is old")
}
age<18 ? console.log("this is too young") : console.log("old")
age < 18 && console.log("young");
age < 18 ?? console.log("young");
const date = new Date();
const time = date.getHours();

if(time<12){
    console.log("Good Moring");
}else if(time<16){
    console.log("Good Afternoon")
}else if(time<20){
    console.log("Good Evening")
}else if(time<24){
    console.log("Good Night")
}else{
    console.log("Please Correct time")
}

const day = date.getDay();
console.log("day",day);
switch (day) {
    case 0:
        console.log("Today is Monday")
        break;
    case 4:
        console.log("Today is Friday")
        break;

    default:
        console.log("correct day")
        break;
}

const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repellendus rem dignissimos, eaque dolore mollitia?";
console.log("length",text.length);
console.log("length",text[15]);