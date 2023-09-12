const express = require('express');
const router = express.Router();

const { generateImage } = require('../controller/imageController');

router.post('/generate-image', generateImage);

module.exports = router;
