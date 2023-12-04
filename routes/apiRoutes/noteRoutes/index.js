const express = require('express');
const router = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../../../helpers/fsUtils');
const path = require('path');
const createNote = require('../../../controllers/createNote');
const deleteNote = require('../../../controllers/deleteNote');

router.get('/', async (req, res) => {
    try {
        const notesData = await readFromFile(path.join(__dirname, "../../../db/db.json"));
        const notes = JSON.parse(notesData);
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error' });
    }
});

router.post('/', createNote);
router.delete('/:id', deleteNote);




module.exports = router;
