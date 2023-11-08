import { FETCH_POKEMONS } from '../actions';

const initialState = [];

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return action.payload;
    default:
      return state;
  }
};

export default pokemonsReducer;
