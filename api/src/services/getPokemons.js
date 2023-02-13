const axios = require('axios')
const formatterPokemons = require("../helpers/formatterPokemons")
const url = "https://pokeapi.co/api/v2/pokemon?limit=40";

const getAllPokemons = async () => {
    try {
        const get = await axios.get(url)
        const allUrlPokemon = get.data.results.map( async e => {
            const info = await axios.get(e.url)
            return formatterPokemons(info.data)
        })
        let result = []
        result = await Promise.all(allUrlPokemon)
        return result
    } catch (error) {
        throw new Error("Oops! :(")
    }
}

module.exports = getAllPokemons;