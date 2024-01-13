import { FETCH_POKEMON } from '../actions';

const initialState = [];

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
