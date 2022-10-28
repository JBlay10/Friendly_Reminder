const notes = require('express').Router();
// const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const util = require('util');


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



module.exports = notes;