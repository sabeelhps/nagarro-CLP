const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'output/output.txt');


const data = 'This is a New Text';

fs.writeFile(F1, data, {
    encoding: 'utf-8',
    flag:'w'
}, (err) => {
    if (err) throw err;
    console.log("Written Successfully");
})

// fs.readFile('abc.txt', {
//     encoding: 'utf-8',
//     flag:'r'
// }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

