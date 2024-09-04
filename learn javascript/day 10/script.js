const cars = ["Audi", "BMW", "Fortuner", "Honda City", "Civic"];

// for(let index = 0; index < cars.length; index++){
//     console.log(cars[index]);
//     document.write(cars[index]);
// }

// cars.forEach((item,index,arr)=>console.log(index + "_" + item))
cars.forEach((item,index,arr)=>{
    console.log(index + "_" + item);
    console.log(arr);
})

// cars.forEach(getValues)

// function getValues(value, i, arr){
//     console.log(i + "_" + value);
//     console.log(arr)
// }

const myNum = [1,2,3,4,5];
// const myNumberSquare = myNum.map(squareValues)
// function squareValues(value,index){
//     return value*value;
// }
const myNumberSquare = myNum.map((value)=> value*value)
console.log(myNumberSquare);

const students = [
    {
        id:1,
        studentName: "Abdul Saboor"
    },
    {
        id:2,
        studentName: "Abdul Shakoor"
    },
    {
        id:3,
        studentName: "Abdul Qadoos"
    },
];

const newStudetnsList = students.filter((student)=> student.id !== 2);
console.log(newStudetnsList);

