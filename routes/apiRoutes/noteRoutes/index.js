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

// router.delete('/:id', async (req, res) => {
//     try {
//         const deleteId = req.params.id;
//         const notesData = await readFromFile(path.join(__dirname, "../../../db/db.json"));
//         const existingNotes = JSON.parse(notesData);
//         const indexToDelete = existingNotes.findIndex((note) => note.id === deleteId);

//         if (indexToDelete === -1) {
//             existingNotes.splice(indexToDelete, 1);
//             await writeToFile(path.join(__dirname, "../../../db/db.json"), existingNotes);

//             res.status(200).json({success: true, message: 'Note deleted successfully'});
//         } else {
//             res.status(404).json({success: false, message: 'Note not found'});
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({error: 'Internal Server Error' });
//     }
// });



module.exports = router;
