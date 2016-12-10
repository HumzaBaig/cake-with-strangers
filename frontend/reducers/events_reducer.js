import { merge } from 'lodash';
import { RECEIVE_EVENTS } from '../actions/event_actions';

const _defaultState = {
  1: "not fetched yet"
};

const EventsReducer = (oldState = _defaultState, action) => {
  let newState;
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_EVENTS:
      newState = action.data;
      return newState;
    default:
      return oldState;
  }
};

export default EventsReducer;
