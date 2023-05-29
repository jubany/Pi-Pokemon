import React, { useState } from 'react'
import style from "./SearchBar.module.css"
import { useDispatch } from "react-redux"
import { getPokemonByName } from '../../redux/actions';

function SearchBar() {

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const handlechange = (e) => {
    setName(e.target.value)
  }
  const handleClick = (e) => {
    dispatch(getPokemonByName(name))
    setName("");
    // e.target.value = ""
  }
  const handleSubmit = (element) => {
    element.preventDefault();
    if (name) {
      dispatch(getPokemonByName(name));
      setName("");
    }
  };

  return (
    <div className={style.searchBar}>
      {/* <input onChange={handlechange} type="tex" placeholder="Search your pokemon"/>
        <button onClick={handleClick} className={style.btnPrimary}>Search</button> */}
       
      <div onSubmit={handleSubmit}>
        <div className={style.searchBar}>
          <input
            onChange={handlechange}
            type="tex"
            placeholder="Search your pokemon"
            value={name}
          />
          <button onClick={handleClick} className={style.btnPrimary}>
            Buscar
          </button>
        </div>
        {/* <div>
        <Link to="/pokemons">
          <button className={styles.btnPrimary}>BACK</button>
        </Link>
      </div> */}
      </div>
    </div>
  )
}

export default SearchBar;
// import React, { useState } from "react";
// import styles from "./SearchBar.module.css";
// import { useDispatch } from "react-redux";
// import { getPokemonByName } from "../../redux/actions";
// // import { Link } from "react-router-dom";

// function SearchBar() {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");

//   const handlechange = (element) => {
//     setSearch(element.target.value);
//   };

//   const handleClick = () => {
//     dispatch(getPokemonByName(search));
//     setSearch("");
//   };

//   const handleSubmit = (element) => {
//     element.preventDefault();
//     if (search) {
//       dispatch(getPokemonByName(search));
//       setSearch("");
//     }
//   };

//   return (
//     <div onSubmit={handleSubmit}>
//       <div className={styles.searchBar}>
//         <input
//           onChange={handlechange}
//           type="tex"
//           placeholder="Search your pokemon"
//           value={search}
//         />
//         <button onClick={handleClick} className={styles.btnPrimary}>
//           SEARCH
//         </button>
//       </div>
//       {/* <div>
//         <Link to="/pokemons">
//           <button className={styles.btnPrimary}>BACK</button>
//         </Link>
//       </div> */}
//     </div>
//   );
// }

// export default SearchBar;