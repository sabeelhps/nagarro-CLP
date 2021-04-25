
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log(err);
//     });


const getPrice = async() => { 
    const res=await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log(res.data.ticker.price);
}

getPrice();