import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import pokemonReducer from './pokemon';
import typeReducer from './type';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer,
  type: typeReducer
});

export default rootReducer;
