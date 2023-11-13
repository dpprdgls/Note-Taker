const router = require("express").Router();

const short = require("short-uuid");

const { readFromFile, readAndAppend, writeToFile } = require("./utils/fsUtils");

//Route to get all notes
router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//Route to get a single note by id
router.get("/:id", (req, res) => {
  const noteId = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const readNote = json.filter((note) => note.id === noteId);
      if (readNote.length > 0) {
        res.json(readNote);
      } else {
        res.json("Note not found");
      }
    });
});

//Route to delete a note by id
router.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const updatedJson = json.filter((note) => note.id !== noteId);
      writeToFile("./db/db.json", updatedJson);
      res.json(`Note ${noteId} deleted`);
    });
});
