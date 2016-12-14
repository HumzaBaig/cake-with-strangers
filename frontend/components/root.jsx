import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import AccountContainer from './account/account_container';
import CitiesContainer from './cities/cities_container';
import CityDetailContainer from './cities/city_detail/city_detail_container';
import HostPageContainer from './hosting/host_page_container';
import DashboardContainer from './dashboard/dashboard_container';
import Homepage from './homepage';
import About from './about';

import { fetchCities, fetchCity } from '../actions/cities_actions';
import { fetchEvents } from '../actions/event_actions';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _requestCitiesOnEnter = () => {
    store.dispatch(fetchCities());
  };

  const _requestCityOnEnter = nextState => {
    store.dispatch(fetchCity(nextState.params.cityId));
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Homepage} />
          <Route path="/cities" component={CitiesContainer} onEnter={_requestCitiesOnEnter} />
          <Route path="/cities/:cityId" component={CityDetailContainer} onEnter={_requestCityOnEnter}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/users/edit" component={AccountContainer} />
          <Route path="/hosting" component={HostPageContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
