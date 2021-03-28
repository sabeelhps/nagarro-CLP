// class Syntax

// class Person{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Hello from ${this.name}`);
//     }
// }


// const p1 = new Person("Kartik", 25);
// const p2 = new Person("Vivek", 22);



// ----------------------------

class Car {

    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    startCar() {
        console.log(`Starting the car ${this.name}`);
    }

    // Getter and Setter Methods

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            this.price = 0;
        } else {
            this.price = newPrice;
        }
    }

}


// const c1 = new Car("Audi", 300000, "Black");

class RacingCar extends Car{

    constructor(name, price, color, maxSpeed, isDiscBrake) {
        super(name, price, color);
        this.maxSpeed = maxSpeed;
        this.isDiscBrake = isDiscBrake;
    }

    get getMaximumSpeed() {
        return this.maxSpeed;
    }

    set setMaximumSpeed(newSpeed) {
        if (newSpeed < 100) {
            this.maxSpeed = 100;
        }
        else {
            this.maxSpeed = newSpeed;
        }
    }


}

const r1 = new RacingCar("BMW", 500000, "Blue", 400, true);

