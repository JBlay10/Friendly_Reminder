const express = require('express');
const path = require('path');
const api = require('./routes/index');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing Json and urlencoded form of data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for index and notes (html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Listen function for console notification
app.listen(PORT, () => {
    console.log(`Now listening http://localhost:${PORT}`)
});