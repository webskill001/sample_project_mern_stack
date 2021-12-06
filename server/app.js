const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

dotenv.config({ path: './config.env' });
// mongodb database

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(DB).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));

// middleware

const middleware = (req, res, next) => {
    console.log('hello my middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('hello world from the server');
});

app.get('/about', middleware, (req, res) => {
    console.log('hello my about');
    res.send('hello world from the about us');
});

app.get('/contact', (req, res) => {
    res.send('hello world from the contact us');
});

app.get('/register', (req, res) => {
    res.send('hello world from the register');
});

app.get('/login', (req, res) => {
    res.send('hello world from the login');
});

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})