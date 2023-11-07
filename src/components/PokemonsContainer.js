import React from 'react';
import PokemonsHeader from './PokemonsHeader';
import Pokemons from './Pokemons';

const PokemonsContainer = () => (
  <div className="d-flex flex-column">
    <div className="border-bottom mt-5 pb-5">
      <PokemonsHeader />
    </div>
    <div className="mt-5">
      <h2>Pokemons Container Component</h2>
    </div>
    <div className="mt-5">
      <Pokemons />
    </div>
  </div>
);

export default PokemonsContainer;
