import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CitiesMiddleware from './cities_middleware';
import EventsMiddleware from './events_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CitiesMiddleware,
  EventsMiddleware
);

export default RootMiddleware;
