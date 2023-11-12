const express = require('express');
const app = express();

const util = require('util');
const path = require('path');
const fs = require('fs');
const noteDb = require('./db/db.json');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`));

