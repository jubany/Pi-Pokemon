import React from "react";
import style from './Paginado.module.css'

export default function Paginado ({pokemonForPage,myPokemons,paginado}){
    const pageNumber = [];

    for(let i=1; i <= Math.ceil(myPokemons/pokemonForPage); i++){
        pageNumber.push(i);
    }

    return(
        <nav >
        <ul className={style.paginado}key='pag'>
            { pageNumber && pageNumber.map(number => (
                <li className={style.paginadoItem} key={number}>
                    <button className={style.numbers} onClick={() => paginado(number)}>{number}</button>
                </li>
            ))}
        </ul>
    </nav>
    )

}