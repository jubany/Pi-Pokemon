const {Router} = require('express');
const router = Router()
const getPokemons = require('../services/getPokemons')
const getPokemonsDB = require('../services/getPokemonsDB')
const joinResponsePokemons = require("../helpers/joinResponsePokemons")

router.get("/", async (req,res) => {
    const { name } = req.query
    try {
        let response = joinResponsePokemons(await getPokemons(), await getPokemonsDB());
        if (name) response = [response.find(e => e.name.toLowerCase() === name.toLowerCase())]
        if (!response.length || response[0] === null) throw new Error("Oops! :(")
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = router;