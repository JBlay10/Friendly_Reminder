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

    const { title, text } = req.body;

    // if statement with if else statement for new note and message for added note
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid.v4()
        };
        fs.writeFile('./db/db.json', 'utf8', (err, data) => {
            if (err){
                console.log(err)
            }else {
                const pData = JSON.parse(data);
                pData.push(newNote);

                fs.writeFile('./db/db.json', JSON.stringify(pData), (err) => {
                    if (err){
                        console.log(err)
                    }else {
                        console.log('New note added!')
                    }
                })
            }
        })
    }
});



module.exports = notes;