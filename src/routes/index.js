const express = require('express');

const router = express.Router();

const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const pokemonRoutes = require('./pokemonRoutes');

router.use('/login', loginRoutes);
router.use('/users', userRoutes);
router.use('/pokemons', pokemonRoutes);

module.exports = router;
