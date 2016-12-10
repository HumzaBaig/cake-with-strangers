export const requestCities = success => {
  $.ajax({
    url: 'api/cities',
    success
  });
};

export const requestCity = (cityId, success) => {
  $.ajax({
    url: `api/cities/${cityId}`,
    success
  });
};
