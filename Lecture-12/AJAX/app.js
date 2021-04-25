// const fetchedData = '{"ticker":{"base":"BTC","target":"USD","price":"49880.31547992","volume":"25849.97511841","change":"13.62714086"},"timestamp":1619331307,"success":true,"error":""}';
// const data = JSON.parse(fetchedData);
// console.log(data.ticker.price);

// Oldest Way of Making AJAX Request


// const req = new XMLHttpRequest();

// req.onload = function () {

//     const fetchedData = this.responseText;
//     const data = JSON.parse(fetchedData);

//     console.log(data.ticker.price);
//     document.body.append(data.ticker.price);
// }

// req.onerror = function () {
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();




// -------------------------------Fetch------------------------


fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        return res.json();
    })
    .then(data => {
        console.log(data.ticker.price);
    })
    .catch(err => {
        console.log(err);
    })
