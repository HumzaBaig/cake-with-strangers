import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';
import CityReducer from './city_reducer';
import EventsReducer from './events_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  currentCity: CityReducer,
  events: EventsReducer
});

export default RootReducer;
