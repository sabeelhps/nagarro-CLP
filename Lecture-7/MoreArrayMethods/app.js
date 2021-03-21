// Advanced array methods

// map

let arr = [1, 2, 3, 4, 5];

// function square(n) {
//     return n * n;
// }

let b = arr.map(function (n, idx) {
    // console.log(idx);
    return Math.sqrt(n);
});
// console.log(arr);
// console.log(b);


// filter

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}

let c = a.filter(isEven);
console.log(a);
console.log(c);