// async function add(x, y) {
    
//     if (x + y <= 5) {
//         return x+y;
//     } 
// }


async function getPrice() {

    console.log("Starting the getprice function");
    
    console.log("Fetching the data");
    
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    
    console.log("Starting to parse the fetchedResponse to get the data")

    const data = await res.json();

    console.log("GOT the fecthed data");
    console.log(data);

}

getPrice();


console.log("After get price function");
console.log("After get price function");
console.log("After get price function");
console.log("After get price function");

