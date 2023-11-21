const express = require('express');
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');


router.use('/notes', noteRoutes);

// router.get('/', async (req, res) => {
//     try {
//         const notesData = await readFromFile(path.join, "../db/db.json");
//         const notes = JSON.parse(notesData);
//         res.json(notes);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({error: 'Internal Server Error' });
//     }
// });

module.exports = router;