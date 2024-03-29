import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../redux/actions/index';
import { useParams } from 'react-router-dom';
import pokeballEye from '../../assets/img/pokeballEye.gif';
import style from './PokemonDetails.module.css';
import { Link } from 'react-router-dom';

const PokemonDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector(state => state.pokemondetail);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch, id]);

  return (
    <div className={style.content}>
      {!Object.keys(detail).length ? (
        <img src={pokeballEye} alt='' className="pokeball-gif" />
      ) : (
        <>
          <div className="image-container">
            <div className={style.card}>
              <h1>{detail.name}</h1>
              <img src={detail.image} alt={detail.name} />
              <h3>Height: {detail.height}</h3>
              <h3>Life: {detail.life}</h3>
              <h3>Attack: {detail.attack}</h3>
              <h3>Defense: {detail.defense}</h3>
              <h3>Speed: {detail.speed}</h3>
              <h3>Types: {detail.types.map((e, index) => (
                <span key={index}>{e.name}</span>
              ))}</h3>
            </div>
          </div>
          <div className="button-container">
            <Link to="/home">
              <button className={style.btnPrimary}>Back Home</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetails;