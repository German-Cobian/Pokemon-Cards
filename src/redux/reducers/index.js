import { combineReducers } from 'redux';
import typelistReducer from './typelist';
import pokemonReducer from './pokemon';
import typeReducer from './type';

const rootReducer = combineReducers({
  pokemons: typelistReducer,
  pokemon: pokemonReducer,
  type: typeReducer
});

export default rootReducer;
