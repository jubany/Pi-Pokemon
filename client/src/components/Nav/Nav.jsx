import React from "react";
import logo from "../../assets/img/International_Pokémon_logo.svg.webp";
import style from "../Nav/Nav.module.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={`${style.navbar} container`}>
      <div className={style.header}>
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className={style.buttonContent}>
        <Link to="/" className={style.btnPrimary}>Home</Link>
        <Link to="/create-pokemon" className={style.btnPrimary}>Create a Pokemon</Link>
        <div className={`${style.buttonContent} ${style.searchBarContainer}`}>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
