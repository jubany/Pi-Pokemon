import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons,getPokemonsTypes, getPokemonByAlfavetic, getPokemonByAttack, filterByApiOrCreated, filterByType } from '../../redux/actions/index';
import Nav from '../../components/Nav/Nav';
import Paginado from '../../components/Paginado/Paginado'
import CardPokemon from '../../components/CardPokemon/CardPokemon'
import style from './Home.module.css'


export default function Home(){

    const dispatch = useDispatch();

    const myPokemons = useSelector((state)=> state.pokemons)
    const types =  useSelector(state => state.pokemonsTypes )

    const [/*order*/, setOrder] = useState("")
    

    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonForPage, /*setPokemonForPage*/] = useState(12)
    const lastPokemon = currentPage * pokemonForPage;
    const firstPokemon = lastPokemon - pokemonForPage;
    const currrentPokemons = myPokemons.slice(firstPokemon,lastPokemon);


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getPokemonsTypes())
    },[dispatch])
    
    
    function handleByApiOrCreated(e){
        e.preventDefault();
        dispatch(filterByApiOrCreated(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    function handleByType(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value))
    }

    function handleByAttack(e){
        e.preventDefault();
        dispatch(getPokemonByAttack(e.target.value))
        setCurrentPage(1)//ponemelo en la pag 1
        setOrder(e.target.value)//a ese estado local modificamelo para q desde el front me haga el ordenamiento
    }

    function handleByAlfaphetical(e){
        e.preventDefault();
        dispatch(getPokemonByAlfavetic(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }
    

    return (
        <div className={style.backGroundHome}>
            <br />
            <Nav/>
            <div className={style.optionsHome}>
            <select className={style.filters} defaultValue="notFound"  onChange={e => {handleByAlfaphetical(e)}}>
                    <option disabled value="notFound">name order</option>
                    <option value="a-z">A - Z</option>
                    <option value="z-a">Z - A</option>
                </select>

                <select className={style.filters} defaultValue="notFound" onChange={e => {handleByApiOrCreated(e)}}>
                    <option disabled value="notFound">Pokemons</option>
                    <option value="myPokemons">Pokemons Create</option>
                    <option value="nativePokemons">Pokemons</option>
                </select>

                <select className={style.filters} defaultValue="notFound" onChange={e => {handleByAttack(e)}}>
                    <option disabled value="notFound">Attack</option>
                    <option value="max_Atck" >Attack Strong </option>
                    <option value="min_Atck" >Attack Weak </option>
                </select>

                <select className={style.filters} defaultValue="notFound" onChange={e => handleByType(e)}>             {/* cuando seleccino un tipo, se ejecuta el handle */}
                    <option disabled value="notFound">Type</option>
                    {types.map((t) => (            //recorro el estado types y por cada tipo ...
                            <option value={t.name} key={t.name}>{t.name.toUpperCase()}</option>   //renderizo un option con el nombre de cada uno en el select
                        ))}
                </select>
            </div>
            <div className={style.position}>
            {
                currrentPokemons && currrentPokemons.map(e => {
                    return(
                        <CardPokemon
                                                  key={e.id}
                                                  id={e.id}
                                                  name={e.name}
                                                  image={e.image}
                                                  type={e.types}
                                                  />
                        )
                    })
                }
            </div>
            <div className={style.paginadoHome}>
                <Paginado pokemonForPage={pokemonForPage} myPokemons={myPokemons.length} paginado={paginado}
                />
            </div>
            <br />
        </div>
    )
}
