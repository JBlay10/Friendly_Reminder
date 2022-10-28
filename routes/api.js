const notes = require('express').Router();
const fs = require('fs');
const util = require('util');
const uuid = require('uuid');

// let input = require('../db/db.json');
const readFromFile = util.promisify(fs.readFile);

// GET Route for retrieving notes
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => {
        res.json(JSON.parse(data))
    })
});

// POST Route for new note
notes.post('/notes', (req, res) => {
    console.log(req.body)

    // const 
});



module.exports = notes;