const path = require('path');
const short = require('short-uuid');
const { readFromFile, writeToFile } = require('../helpers/fsUtils');






const deleteNote =  async (req, res) => {
    try {
        const deleteId = req.params.id;
        // const notesData = await readFromFile(path.join(__dirname, "../db/db.json"));
        // const existingNotes = JSON.parse(notesData);
        const existingNotes = await readFromFile(path.join(__dirname, "../db/db.json")).then((data) => JSON.parse(data));
        const indexToDelete = existingNotes.findIndex((note) => note.id === deleteId);

        if (indexToDelete === -1) {
            existingNotes.splice(indexToDelete, 1);
            writeToFile(path.join(__dirname, "../db/db.json"), existingNotes);

            res.status(200).json({success: true, message: 'Note deleted successfully'});
        } else {
            res.status(404).json({success: false, message: 'Note not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error' });
    }
};


module.exports = deleteNote;