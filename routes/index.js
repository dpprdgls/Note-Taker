const router = require('express').Router();


const apiRoutes = require('./apiRoutes');
const path = require('path');

router.use('/api', apiRoutes);

//route to send the index file
router.get('/', (req, res) => {
    console.log('Index request received');
    res.sendFile(path.join(__dirname, '../public/assets/index.html'));
});

//route to send the notes file
router.get('/notes', (req, res) => {
    console.log('Notes request received');
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
});

//route to send the index file if wildcard requested

router.get(/^(?!\/notes).*$/, (req, res) => {
    console.log('You are wild!');
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});

module.exports = router;