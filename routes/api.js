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
        fs.readFile('./db/db.json', (err, data) => {
            if (err){
                console.log(err)
            }else {
                const parsedData = JSON.parse(data);
                parsedData.push(newNote);

                fs.writeFile('./db/db.json', JSON.stringify(parsedData), (err) => {
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

// Delete notes
notes.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('./db/db.json', (err, data) => {
        if (err){
            console.log(err)
        }else {
            const db = JSON.parse(data);
            const filter = db.filter(del => del.id != id);

            fs.writeFile('./db/db.json', JSON.stringify(filter), (err) => {
                if (err){
                    console.log(err)
                }else {
                    console.log('Note deleted!')
                    res.end();
                }
            })
        }
    })
});

module.exports = notes;