
// Callback Hell - Bad Way of writing async code
// function downloadFile(url,downloaded) {
//     console.log(`Starting the Download from ${url}`);

//     setTimeout(function () {
//         const path = url.split('/').pop();
//         downloaded(path);
//     }, 3000);

// }

// function compressFile(path, compressed) {
//     console.log(`Starting the file compression for ${path}`);

//     setTimeout(function () {
//         const compressedPath = path.split('.')[0] + '.zip';
//         compressed(compressedPath);
//     },2000)
// }


// function uploadFile(compressedPath, uploaded) {
    
//     console.log(`Starting the file upload from ${compressedPath}`);

//     setTimeout(function () {
//         const uploadedPath = 'http://localsystem/' + compressedPath;
//         uploaded(uploadedPath);
//     },3000)


// }

// downloadFile('http://facebook.com/profile.jpg', function (path) {
//     console.log(`File downloaded Successfully as ${path}`);
//     compressFile(path, function (compressedPath) {
//         console.log(`File compresses as ${compressedPath}`);
//         uploadFile(compressedPath, function (uploadedPath) {
//             console.log(`File uploaded Successfully at ${uploadedPath}`);
//             console.log("Everything Done!!");
//         })
//     })
// });



// --------------------------------------------------- 

// Promise - Better Way of writing async code


function downloadFile(url) {
    console.log(`Starting the Download from ${url}`);

    return new Promise(function (resolve, reject) {

        if (!url.startsWith('http')) {
            throw new Error("Invalid URL");
        }


        setTimeout(function () {
            const path = url.split('/').pop();
            resolve(path);
        }, 3000);
    }) 

}

function compressFile(path) {
    console.log(`Starting the file compression for ${path}`);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const compressedPath = path.split('.')[0] + '.zip';
            resolve(compressedPath);
        },2000)
    }) 
}


function uploadFile(compressedPath) {
    
    console.log(`Starting the file upload from ${compressedPath}`);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const uploadedPath = 'http://localsystem/' + compressedPath;
            resolve(uploadedPath);
        },3000)
    }) 
}

// downloadFile('http://facebook.com/profile.jpg')
//     .then(function (path) {
//         console.log(`File downloaded as  ${path}`);
//         compressFile(path)
//             .then(function (compressedPath) {
//                 console.log(`File compresses as ${compressedPath}`);

//                 uploadFile(compressedPath)
//                     .then(function (uploadedPath) {
//                         console.log(`File uploaded Successfully at ${uploadedPath}`);
//                         console.log("Everything Done!!");
//                 })

//             })
    
// })


downloadFile('http://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then(function (uploadedPath) {
        console.log(`File uploaded Successfully at ${uploadedPath}`);
        console.log("Everything Done");
    })
    .catch(function (e) {
       
        console.log("OHH NO ERROR");
         console.log(e.message);
    })
