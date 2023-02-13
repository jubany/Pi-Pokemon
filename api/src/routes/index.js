const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('./getAllPokemons')
const getTypesPokemons = require("./getTypesPokemons")
const createPokemon = require("./createPokemon")
const getPokemonById = require("./getPokemonById")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/all", getPokemons)
router.use("/types",getTypesPokemons)
router.use("/createPokemon",createPokemon)
router.use("/",getPokemonById)



module.exports = router;
