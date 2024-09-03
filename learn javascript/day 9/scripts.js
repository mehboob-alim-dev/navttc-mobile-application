const fruits = ["Apple","Banana",'Mango','Orange',"Grapes"];

console.log(fruits.length)
// while loop

let index = 0;

let list = `<ul>`
while(index<fruits.length){
    // document.write(fruits[index]);
    list +=`<li>` + fruits[index] + `</li>`
    index++;
}
list += `</ul>`
document.getElementById("listItem").innerHTML = list;

let cars = ["Fortuner", "Audi", "BMW"];
let i = 0;
do{
    console.log(cars[i]);
    i++;
}while(i<cars.length);

// *
// * *
// * * *
// * * * *
// * * * * *

// outer loop
for(let j = 1; j < 6; j++){
    // inner loop
    for(let k = 0; k < j; k++){
        document.write("*");
    }
    document.write("<br>");
}

// * * * * *
// * * * *
// * * *
// * *
// *
let text = "";