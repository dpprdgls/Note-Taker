const express = require('express');
const router = require('express').Router();
const { readFromFile } = require('../../../helpers/fsUtils');
const path = require('path');
const createNote = require('../../../controllers/createNote');

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


module.exports = router;
