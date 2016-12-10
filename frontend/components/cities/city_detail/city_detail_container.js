import { connect } from 'react-redux';
import { updateUser } from '../../../actions/account_actions';
import CityDetail from './city_detail';

const mapStateToProps = state => ({
  city: state.currentCity,
  hosts: state.currentCity.hosts,
  events: state.currentCity.events,
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user, undefined))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail);
