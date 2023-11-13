const router = require("express").Router();

const short = require("short-uuid");

const { readFromFile, readAndAppend, writeToFile } = require("./utils/fsUtils");

//Route to get all notes
router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.get('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json').then((data) => JSON.parse(data))
    .then((json) => {
        const readedNote = json.filter((note) => note.id === noteId);
        if (readedNote.length > 0) {
            res.json(readedNote);
        } else {
            res.json('Note not found');
        }
        });
});