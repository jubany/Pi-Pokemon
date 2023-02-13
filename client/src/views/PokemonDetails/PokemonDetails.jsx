import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getPokemon}  from "../../redux/actions/index";
import { useParams } from 'react-router-dom';
import pokeballEye from '../../assets/img/pokeballEye.gif'
import style from "./PokemonDetails.module.css"
import { Link } from 'react-router-dom';



const PokemonDetails = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.pokemondetail) //guardo en detail el estado detail:[] del reducer

    useEffect(()=> {
        dispatch(getPokemon(id)) //al montarse el componente despacho la accion getPokemon con el id que capturo del URL dinamico
    },[dispatch,id]);
    
    return (
        <div className={style.content}>
            {!Object.keys(detail).length //si detail esta vacio pasa esto
            ? ( 
              <img src={pokeballEye} alt='' className="pokeball-gif"/> 
              )
           :  (
                <>
                  <div className={style.card}>
                    <h1>{detail.name}</h1>
                    <img src={detail.image} alt={detail.name}/>
                    <h3>Height: {detail.height}</h3>
                    <h3>Life: {detail.life}</h3>
                    <h3>Attack: {detail.attack}</h3>
                    <h3>Defense: {detail.defense}</h3>
                    <h3>Speed: {detail.speed}</h3>
                    <h3>Types: {detail.types.map((e, index )=>(<span key={index}>{e.name} </span>))} </h3>
                  </div>
                  <div>
                    <Link to="/home"><button className={style.btnPrimary}>Back Home</button></Link>
                  </div>
                </>
              )}
        
        </div>
    );
}

export default PokemonDetails