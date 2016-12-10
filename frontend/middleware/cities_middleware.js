import { FETCH_CITIES, FETCH_CITY, receiveCities, receiveCity} from '../actions/cities_actions';
import { requestCities, requestCity } from '../util/cities_api_util';


const CitiesMiddleware = ({ getState, dispatch }) => next => action => {
  const citiesSuccessCB = cities => dispatch(receiveCities(cities));
  const citySuccessCB = city => dispatch(receiveCity(city));

  switch (action.type) {
    case FETCH_CITIES:
      requestCities(citiesSuccessCB);
      return next(action);
    case FETCH_CITY:
      requestCity(action.cityId, citySuccessCB);
      return next(action);
    default:
      return next(action);
  }
};

export default CitiesMiddleware;
