const express = require('express');

const router = express.Router();

router.get('/search');
router.get('/:id');
router.get('/');

module.exports = router;
