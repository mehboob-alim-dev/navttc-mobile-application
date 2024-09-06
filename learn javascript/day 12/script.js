const cars = ["Fortuner", "BMW", "Audi"]
cars.sort();
// document.write(cars);
// document.write("<br>")
// document.write(cars.reverse());
const documentValue = document.getElementById("sort");
documentValue.innerHTML = cars;
console.log(documentValue);
document.getElementById("reverse").innerHTML = cars.reverse();

const myNumbers = [34,52,300,48,83,1];
myNumbers.sort((a,b)=> a-b );
document.write(myNumbers);

const carsWithModels = [
    {
        carName : "fortuner",
        model : 2021,
    },
    {
        carName : "BMW",
        model : 2018,
    },
    {
        carName : "Audi",
        model : 2015,
    }
];

carsWithModels.sort((a,b)=> a.model-b.model);
console.log(carsWithModels);
document.write("<br>");
document.write(carsWithModels[0].carName + " " + carsWithModels[0].model);
document.write(carsWithModels[1].carName + " " + carsWithModels[1].model);
document.write(carsWithModels[2].carName + " " + carsWithModels[2].model);

const vichels = ["Audi", "hilux"];
// const car = vichels[0];
// const truck = vichels[1];
const [car, truck] = vichels;

console.log(car,truck);