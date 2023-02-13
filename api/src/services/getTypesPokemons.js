const axios = require("axios");
const { Type } = require("../db")

const url = "https://pokeapi.co/api/v2/type"

const getTypesPokemons = async ()=> {

    try {
        const get = await axios.get(url)
        const data = get.data.results.map(e => {return {name:e.name}})
        data.forEach( async el => {
            const type = await Type.findOrCreate({
                where:{
                    name: el.name
                }
            })
        })
        return Type.findAll()
          
    } catch (error) {
        throw new Error("Oops! :(")
    }

};

module.exports = getTypesPokemons;