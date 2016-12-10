import { merge } from 'lodash';
import { RECEIVE_CITIES } from '../actions/cities_actions';


const CitiesReducer = (oldState = {}, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_CITIES:
      newState = action.cities;
      return newState;
    default:
      return oldState;
  }
};

export default CitiesReducer;
