import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import pokemonReducer from './pokemon';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer
});

export default rootReducer;
