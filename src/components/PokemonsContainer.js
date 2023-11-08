import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonsHeader from './PokemonsHeader';
import Pokemons from './Pokemons';
import { displayPokemons } from '../redux/actions/pokemons';

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayPokemons());
  }, [dispatch]);

  const pokemonsState = useSelector((state) => state.pokemons);

  return (

  <div className="d-flex flex-column">
    <div className="border-bottom mt-5 pb-5">
      <PokemonsHeader />
    </div>
    <div className="mt-5">
      { pokemonsState.map((item) => (
        <Pokemons
          key={item.id}
          id={item.id}
          name={item.name}
          url={item.url}
        />
      ))}
    </div>
    <div className="mt-5">
      <Pokemons />
    </div>
  </div>
  );
};

export default PokemonsContainer;
