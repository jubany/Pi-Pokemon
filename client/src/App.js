import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing'
import CreatePokemon from './views/CreatePokemon/CreatePokemon';
import PokemonDetails from './views/PokemonDetails/PokemonDetails';
import axios from 'axios'
axios.defaults.baseURL ='https://pi-pokemon-production-5cd4.up.railway.app/all'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/pokemon/details/:id' element={<PokemonDetails/>}/>
      <Route path='/create-pokemon' element={<CreatePokemon/>}/>
    </Routes>
  );
}                

export default App;