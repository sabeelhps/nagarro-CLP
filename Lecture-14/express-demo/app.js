const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("This is the home route");
})

app.get('/cat', (req, res) => {
    res.send("<h1>Meow Meow</h1>")
});

app.get('/dog', (req, res) => {
    res.send("<h1>Woof Woof</h1>")
})


// SUBREDITT DEMO - path parameters

app.get('/r/:subredit/:id', (req, res) => {

    console.log(req.params);
    const { subredit,id } = req.params;

    res.send(`<h1>This is a ${subredit} Subredit with id = ${id}</h1>`)
})

app.get('/search', (req, res) => {
    console.log(req.query);

    const { q } = req.query;

    res.send(`You made a search to ${q}`);
})




app.get('*', (req, res) => {
    res.send("INVALID URL")
})


app.listen(3000, () => {
    console.log('server started at port 3000');
})