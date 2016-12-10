import { RECEIVE_CURRENT_USER,
          RECEIVE_ERRORS,
          LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = ({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, _nullUser, { currentUser: action.currentUser });
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, _nullUser, { errors: action.errors });
      return newState;
    case LOGOUT:
      newState = merge({}, _nullUser);
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
