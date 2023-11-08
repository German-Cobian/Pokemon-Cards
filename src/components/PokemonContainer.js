import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pokemon from './Pokemon';
import { displayPokemon } from '../redux/actions/pokemons';

const PokemonContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayPokemon('pikachu'));
  }, [dispatch]);

  const onChangeSearchBar = (e) => {
    setSearchValue(e.target.value.trim());
    if (e.target.value.trim().length > 0) dispatch(displayPokemon(e.target.value.trim()));
  };

  const pokemonState = useSelector((state) => state.pokemon);

  return (

  <div className="">
    <div className="d-flex flex-row justify-content-center mt-5" id="section__searchbar">
      <label className="me-2"><strong>Search for Pokemon by Name:</strong></label>
      <input
        className="rounded col-4"
        type="search"
        name="input__category"
        id="input__category"
        placeholder="Search term"
        onChange={onChangeSearchBar}
        value={searchValue}
      />
    </div>
    <div>
      <Pokemon
        key={pokemonState.id}
        id={pokemonState.id}
        name={pokemonState.name}
        order={pokemonState.order}
        height={pokemonState.height}
        weight={pokemonState.weight}
        base_experience={pokemonState.base_experience}
      />
    </div>
  </div>
  );
};

export default PokemonContainer;
