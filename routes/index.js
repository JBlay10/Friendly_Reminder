const index = require('express').Router();
const path = require('path');

// const apiRouter = require('./api');

// GET Route for index and notes (html)

index.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

index.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = index;

