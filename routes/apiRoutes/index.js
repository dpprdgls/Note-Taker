const router = require('express').Router();
const noteController = require('../../controllers');

router.use('/notes', noteController);

module.exports = router;