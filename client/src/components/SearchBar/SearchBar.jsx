import React, { useState } from 'react';
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getPokemonByName } from '../../redux/actions';

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    dispatch(getPokemonByName(name));
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(getPokemonByName(name));
      setName("");
    }
  };

  return (
    <div className={style.searchBar}>
      <form onSubmit={handleSubmit}>
        <div className={style.searchBar}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search your pokemon"
            value={name}
            style={{ textAlign: "center" }}
          />
          <button onClick={handleClick} className={style.btnPrimary}>
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
