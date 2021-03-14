
// function definition
// function say() {
//     console.log("Hello from function");
// }

// say()

function add(a, b) {

    if (typeof a == "number" && typeof b == "number") {
        
        let res = a + b;
        return res;
    }
    else {
       
        return "Invalid Parameters";
    }

}


// console.log(add(6, 3));
// add("Hello", 10);
// add(true, 8);
// add("", 99);
// console.log(add([], 10));


// ------------------------------


function subtract(x, y) {
    return x - y;
}

// let ans=subtract(10, 5);
// console.log(ans);


