import { FETCH_POKEMONS, FETCH_POKEMON, FETCH_TYPE } from '.';

// eslint-disable-next-line import/prefer-default-export
export const displayPokemons = () => async (dispatch) => {
  const response = await fetch('https://pokeapi.co/api/v2/type', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    dispatch({ type: FETCH_POKEMONS, payload: data.results });
  } else {
    dispatch({ type: FETCH_POKEMONS, payload: [] });
  }
};

export const displayPokemon = (name) => async (dispatch) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    dispatch({ type: FETCH_POKEMON, payload: data });
  } else {
    dispatch({ type: FETCH_POKEMON, payload: [] });
  }
};

export const displayType = (name) => async (dispatch) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${name}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    const types = data.pokemon.map((item) => item.pokemon);
    dispatch({ type: FETCH_TYPE, payload: types });
  } else {
    dispatch({ type: FETCH_TYPE, payload: [] });
  }
};
