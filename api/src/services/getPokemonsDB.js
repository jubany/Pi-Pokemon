const { Pokemon, Type } = require("../db")

const getPokemonsDB = async () => {
    const data = await Pokemon.findAll({
        include :{
            model: Type,
            attributes: ['name'],
        }
    }) 
    return data
}

module.exports = getPokemonsDB;