import { FETCH_POKEMONS } from '.';

// eslint-disable-next-line import/prefer-default-export
export const displayPokemons = () => async (dispatch) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=40&offset=40', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch({ type: FETCH_POKEMONS, payload: data.results });
  } else {
    dispatch({ type: FETCH_POKEMONS, payload: [] });
  }
};
