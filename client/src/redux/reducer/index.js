import { 
    CREATE_POKEMON, 
    GET_ALL_POKEMONS, 
    GET_POKEMON, 
    GET_POKEMONS_TYPES, 
    FILTER_BY_TYPE, 
    FILTER_BY_ATTACK,
    FILTER_BY_APHABET, 
    GET_POKEMON_BY_NAME,
    FILTER_BY_API_OR_CREATED,

} from "../actions";

const initialState = {
    pokemons: [],
    pokemondetail: [],
    pokemonsTypes: [],
    filterPokemons: []
};



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return { 
                ...state, 
                pokemons: action.payload,
                filterPokemons: action.payload
            }
        case GET_POKEMON:
            return { ...state, pokemondetail: action.payload }
        case GET_POKEMONS_TYPES:
            return { ...state, pokemonsTypes: action.payload }
        case CREATE_POKEMON:
            return { ...state }
        
        case FILTER_BY_TYPE:
            let fullPokemons2 = state.filterPokemons
            let resultApi = fullPokemons2.filter(p => p.type && p.type.includes(action.payload))
            let resultDb = fullPokemons2.filter(p => p.types && p.types.map(t => t.name).includes(action.payload))
            let result = resultApi.concat(resultDb)
            return {
                ...state,
                pokemons: result
            }

        case FILTER_BY_ATTACK:
            const attack = state.filterPokemons
            const pokemonsAscOrDesc = action.payload === "min_Atck" ? attack.sort((a, b) => {
                if (a.attack > b.attack) return 1
                if (a.attack < b.attack) return -1
                return 0
            }) : action.payload === "max_Atck" ?
                attack.sort((a, b) => {
                    if (a.attack > b.attack) return -1
                    if (a.attack < b.attack) return 1
                    return 0
                }) : action.payload === "notFoun" ? attack : state.pokemons
            return {
                ...state,
                pokemons: pokemonsAscOrDesc
            }

            case FILTER_BY_APHABET:
            const alfavetic = state.filterPokemons
            const pokemonsOrderAlfavetic = action.payload === "a-z" ? alfavetic.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                return 0
            }) :
                alfavetic.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                    return 0
                })
            return {
                ...state,
                pokemons: pokemonsOrderAlfavetic
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state, 
                pokemons: action.payload
            }
        case FILTER_BY_API_OR_CREATED:
            const pokemones = state.filterPokemons;
            const oldPokemons = pokemones.filter(elm => typeof (elm.id) === "number")
            const newPokemons = pokemones.filter(elm => typeof (elm.id) === "string")
            const pokemonFilter = action.payload === "all" ? pokemones : action.payload === "myPokemons" ? newPokemons : oldPokemons;
            return {
                ...state,
                pokemons: pokemonFilter
            }
        default:
            return { ...state };

    };
};

export default rootReducer