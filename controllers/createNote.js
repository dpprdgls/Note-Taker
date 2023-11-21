const path = require('path');
const short = require('short-uuid');
const { readFromFile, writeToFile } = require('../helpers/fsUtils');

const createNote = async (req, res) => {
    try {
        const { title, text } = req.body;

        if (title && text) {
            const existingNotes = await readFromFile('./db.json').then((data) => JSON.parse(data));

            const newNote = { 
                id: short.generate(),
                title,
                text,
            };

            existingNotes.push(newNote);

            await writeToFile('./db.json', existingNotes);

            res.status(201).json(newNote);
        } else {
            res.status(400).json({ error: "Please provide both a title and text for the note."});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error.'});
    }
};








module.exports = createNote; 
