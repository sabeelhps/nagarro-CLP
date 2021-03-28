

// function fun(name, age) {
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     console.log("Inside Fun")
// }

// fun("Kartik", 25);



// Constructor Function

// function Fun(name,age) {
    
   
//     this.name = name;
//     this.age = age;

//     // this.sayHello = function () {
//     //     console.log(`Hello from ${this.name}`);
//     // }
// }

// Fun.prototype.sayHello=function () {
//     console.log(`Hello from ${this.name}`);
// }

// let a = new Fun("Prateek", 26);
// let b = new Fun("Kartik", 25);


// -------------------------------------Binding of this 

// Implicit Binding 

// const person = {
//     name: "Vivek",
//     age: 22,
//     sayHello: function () {
//         console.log(this);
//     }
// }



// Explicit Binding

function fun(name,age) {
    console.log(this);
    console.log(name);
    console.log(age);
}

const a = {
    l: 10,
    m: true,
    n:"Kartik"
}

// fun.call(a,"Kartk",23);


let f = fun.bind(a);

f("Kartk", 24);





