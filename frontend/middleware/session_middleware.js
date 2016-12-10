import { receiveCurrentUser,
          receiveErrors,
          LOGOUT,
          LOGIN,
          SIGNUP } from '../actions/session_actions';

import { UPDATE_USER,
         SET_HOME_CITY} from '../actions/account_actions';

import { updateUserBackend } from '../util/account_api_util';

import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback = user => dispatch(receiveCurrentUser(user));
  let errorsCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case SIGNUP:
      signup(action.user, successCallback, errorsCallback);
      return next(action);
    case LOGIN:
      login(action.user, successCallback, errorsCallback);
      return next(action);
    case UPDATE_USER:
      updateUserBackend(action.user, action.passwordStuff, successCallback, errorsCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
