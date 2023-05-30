import React from 'react'
import { Link } from "react-router-dom"
import style from "./CardPokemon.module.css"

const CardPokemon = (props) => {
  const { name, image, id, type } = props
  return (
    <Link to={`/pokemon/details/${id}`}>
      <div className={style.card}>
        <img src={image} width="150" height="150" alt={name} className={style.pokemonImage} />
        <div className={style.cardInfo}>
          <h1>{name}</h1>
          <div className={style.labelTypes}>
            {type.map((e, index) => (<h3 key={index}>{e.name}</h3>))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardPokemon;
