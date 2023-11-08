import { FETCH_TYPELIST } from '../actions';

const initialState = [];

const typelistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TYPELIST:
      return action.payload;
    default:
      return state;
  }
};

export default typelistReducer;
