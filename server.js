const express = require('express');
const index = require('./routes/index');
const notes = require('./routes/api');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing Json and urlencoded form of data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', notes);
app.use('/', index);

// Listen for console notification
app.listen(PORT, () => {
    console.log(`Now listening http://localhost:${PORT}`)
});