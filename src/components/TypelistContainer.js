import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typelist from './Typelist';
import { displayTypelist } from '../redux/actions/pokemons';

const TypelistContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayTypelist());
  }, [dispatch]);

  const pokemonsState = useSelector((state) => state.pokemons);

  return (

  <div className="d-flex flex-column">
    <div className="border border-dark rounded mt-5 mx-5 py-5 px-5">
      { pokemonsState.map((item) => (
        <Typelist
          key={item.id}
          id={item.id}
          name={item.name}
          url={item.url}
        />
      ))}
    </div>
    <div className="mt-5">
      <Typelist />
    </div>
  </div>
  );
};

export default TypelistContainer;
