import React from 'react'
import logo from "../../assets/img/International_Pokémon_logo.svg.webp"
import icongithub from "../../assets/img/github.png"
import iconlinkedin from "../../assets/img/linkedin.png"
import iconFacebook from '../../assets/img/facebook2.png'
import styles from "./Landing.module.css"
import wanted from "../../assets/img/pokemon-yellow.png"
import pikachu from '../../assets/img/pikachu.png'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <div>
        <div className={styles.header}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={styles.content}>
            <div className={`container ${styles.flex}`}>
                <div className={styles.contentLeft}>
                    <h1>Welcome to the pokemon APP</h1>
                    <p>Here you will find all the information about your favorite pokemons.</p>
                    <Link to="/home" className={styles.btnPrimary}>VISIT</Link>
                    <div className={styles.socialMedia}>
                        <a href='#/'>
                            <img src={icongithub} alt="icon github"/>
                        </a>
                        <a href='#/'>
                            <img src={iconlinkedin} alt="icon linkedin"/>
                        </a>
                        <a href='#/'>
                            <img src={iconFacebook} alt="icon linkedin"/>
                        </a>
                        
                    </div>
                    
                </div>
                <div className={`${styles.contentRight} d-md-none`}>
                    <img src={wanted} alt="pokemonYellow"/>
                    <img src={pikachu} alt="pokemonYellow"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing