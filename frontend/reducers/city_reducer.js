import { merge } from 'lodash';
import { RECEIVE_CITY } from '../actions/cities_actions';

const _defaultState = {
  events: [],
  hosts: []
};

const CityReducer = (oldState = _defaultState, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_CITY:
      newState = action.city;
      return newState;
    default:
      return oldState;
  }
};

export default CityReducer;
