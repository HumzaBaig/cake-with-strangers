import { connect } from 'react-redux';
import { updateUser } from '../../../actions/account_actions';
import { fetchEvents } from '../../../actions/event_actions';
import CityDetail from './city_detail';

const mapStateToProps = state => ({
  city: state.currentCity,
  hosts: state.currentCity.hosts,
  events: state.currentCity.events,
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user, undefined)),
  fetchEvents: (key, cityId) => dispatch(fetchEvents(key, cityId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail);
