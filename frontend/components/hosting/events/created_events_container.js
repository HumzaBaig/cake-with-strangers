import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/event_actions';
import CreatedEvents from './created_events';

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (key, value) => dispatch(fetchEvents(key, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatedEvents);
