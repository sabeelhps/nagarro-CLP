
// const car = {
    
//     name: "Audi",
//     price: 10000,
    
//     startCar: function () {
//         console.log("Starting the car ", this.name);
//     }

// }

const person = {
    name: "Kartik",
    age: 25,
    isAdult: true,
    sayHello: function () {
        console.log(`Hello From ${this.name}`);
    }
}

let p1 = Object.create(person);
let p2 = Object.create(p1);
