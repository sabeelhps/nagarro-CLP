


// fun(innerFun);

// fun(function innerFun() {
//     console.log("InnerFun");
// })

// fun(function() {
//     console.log("InnerFun");
// })




function fun(x) {

    let b = 0;

    function innerFun() {
        b++;
        console.log(b);
    }
    return innerFun;
}


let f = fun();
let f2 = fun();
// console.log(f);
f();
f();
f();



f2();
f2();
f2();
