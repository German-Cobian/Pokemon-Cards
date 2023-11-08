import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Type from './Type';
import { displayType } from '../redux/actions/pokemons';

const PokemonContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayType('pikachu'));
  }, [dispatch]);

  const onChangeSearchBar = (e) => {
    setSearchValue(e.target.value.trim());
    if (e.target.value.trim().length > 0) dispatch(displayType(e.target.value.trim()));
  };

  const typeState = useSelector((state) => state.type);

  return (

  <div className="">
    <div className="d-flex flex-row justify-content-center mt-5" id="section__searchbar">
      <label
        className="me-2"
      >
      Search for Pokemon by Type:
      </label>
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
      { typeState.map((item) => (
        <Type
          key={item.id}
          id={item.id}
          name={item.name}
        />
      ))}
    </div>
  </div>
  );
};

export default PokemonContainer;