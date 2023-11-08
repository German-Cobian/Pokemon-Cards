import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    <div className="border border-dark rounded mt-5 mx-5 py-5 px-5">
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
