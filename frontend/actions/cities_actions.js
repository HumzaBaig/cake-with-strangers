export const FETCH_CITIES = "FETCH_CITIES";
export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const FETCH_CITY = "FETCH_CITY";
export const RECEIVE_CITY = "RECEIVE_CITY";

export const fetchCities = () => ({
  type: FETCH_CITIES
});

export const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

export const fetchCity = cityId => ({
  type: FETCH_CITY,
  cityId
});

export const receiveCity = city => ({
  type: RECEIVE_CITY,
  city
});
