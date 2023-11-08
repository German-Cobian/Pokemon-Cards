import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PokemonContainer from './components/PokemonContainer';
import PokemonsContainer from './components/PokemonsContainer';
import TypeContainer from './components/TypeContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<PokemonContainer />} />
          <Route exact path="/types-listing" element={<PokemonsContainer />} />
          <Route exact path="/pokemons-type" element={<TypeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
