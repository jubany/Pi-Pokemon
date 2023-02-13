const { Pokemon, Type } = require("../db")

const createPokemon = async (data)=>{
    try {
        const {name, life, attack, speed, defense, height, weight, types} = data
        const newPokemon = await Pokemon.create({
            name: name, 
            life: life, 
            attack: attack, 
            speed: speed, 
            defense: defense, 
            height: height, 
            weight: weight, 
        });

        types.forEach(async element => {
            let typesDB = await Type.findOne({  
                where: { name : element.name}   
            })
            await newPokemon.addType(typesDB)  
        });
        return newPokemon
    } catch (error) {
        throw new Error("Cannot bet created :(")
    }
}

module.exports = createPokemon; 