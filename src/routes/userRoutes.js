const express = require('express');

const router = express.Router();

router.get('/search');
router.get('/:id');
router.get('/');
router.post('/');
router.put('/');
router.delete('/me');

module.exports = router;
