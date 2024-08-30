// const myName = "Test";
// const myAge = 25;
// const isGrauduated = true;

// console.log(myName, myAge, isGrauduated)

const mySelf = {
    firstName: "Test",
    lastName: "User",
    age: 25,
    isGraduated: true,
    displayInfo: function() {
        return this.firstName + " " + this.age;
    }
    
}
mySelf.nationality = "Pakistani";
delete mySelf.lastName;
console.log(mySelf);
console.log(mySelf.displayInfo());
console.log(mySelf.firstName,mySelf.lastName,mySelf.age);
console.log(mySelf["isGraduated"])

// object destructuring
const {firstName,age,isGraduated,nationality} = mySelf;
console.log(firstName,nationality,age,isGraduated);

const car = new Object();
car.name = "Toyota";
car.color = "Black";
car.model = 2023;

// Add a Method
car.fullName = function() {
    return this.name + " " + this.model;
};

const {name,color,model} = car;
console.log(name,color,model);
console.log(car.fullName());

const myInfo = new Object();

const onChangeHandler=()=>{
    const firstNameElement = document.getElementsByName('first_Name')[0];
    const lastNameElement = document.getElementsByName('last_Name')[0];

    if (firstNameElement && lastNameElement) {
        myInfo.firstName = firstNameElement.value;
        myInfo.lastName = lastNameElement.value;
    }

    console.log("myInfo", myInfo);
}

// constructor function

function Person(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}


Person.prototype.nationality = "Pakistani";
const myInformation = new Person("Muhammad","Ali",25);
const myBrotherInformation = new Person("Muhammad","Ahmed",22);

console.log(myInformation);
console.log(myBrotherInformation);