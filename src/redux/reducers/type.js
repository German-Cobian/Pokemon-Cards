import { FETCH_TYPE } from '../actions';

const initialState = [];

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default typeReducer;
