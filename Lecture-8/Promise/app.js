

const x = new Promise(function (resolve, reject) {
    
    let randomNum = Math.random();

    console.log(randomNum);

    if (randomNum <= 0.5) {
        resolve();
    }
    else {
        reject();
    }
})

x.then(function () {
    console.log("Resolved");
})
.catch(function () {
    console.log("Rejected");
})


