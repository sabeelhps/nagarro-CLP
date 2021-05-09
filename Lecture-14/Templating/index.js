const express = require('express');
const app = express();


app.set('view engine', 'ejs');


const favMovies = ["Star Wars","IronMan","Batman","Martian","Wondor Women"]


app.get('/', (req, res) => {
    res.send('CONNECTED');
})

app.get('/home', (req, res) => {
    
    const randomNum = Math.floor(Math.random() * 100);

    res.render('index', { num: randomNum });
})

app.get('/movies', (req, res) => {

    res.render('movies',{favMovies})
})

app.post('/movies', (req, res) => {
    res.send("THIS IS A POST REQUEST AND IT IS DIFFERENT FROM GET REQUEST")
})



app.listen(3000,()=>{
    console.log('server running at port 3000');
})