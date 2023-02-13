const formatterPokemons = (data)=> {
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        life: data.stats[0].base_stat,
        attack : data.stats[1].base_stat,
        defense : data.stats[2].base_stat,
        speed : data.stats[5].base_stat,
        types: data.types.map(e=>{ return {name:e.type.name}}),
        image: data.sprites.other.dream_world.front_default,
    }
};

module.exports = formatterPokemons;