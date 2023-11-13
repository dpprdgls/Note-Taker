const express = require("express");
const app = express();

const util = require("util");
const path = require("path");
const fs = require("fs");
const noteDb = require("./db/db.json");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("public"));

//route path for a get request that returns all notes from noteDb in json format

app.get("/api/notes", (req, res) => {
  res.json(noteDb);
});



app.post('/api/notes', (req, res) => {
    
    let jsonFilePath= path.join(__dirname, "db/db.json");
    let newNote = req.body;

    noteDb.push(newNote);
    console.log(noteDb);

    try{
        fs.writeFileSync(jsonFilePath, JSON.stringify(noteDb), (err) => {
            if(err) {
                return console.log(err);
            }
            console.log('Note is in database')
        })
    }catch(err) {
        console.log(err);
    }
    res.json(newNote);
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`));
