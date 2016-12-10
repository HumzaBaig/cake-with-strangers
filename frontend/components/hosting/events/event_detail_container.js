import { connect } from 'react-redux';
import { attendEvent, unattendEvent } from '../../../actions/event_actions';
import EventDetail from './event_detail';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  attendEvent: data => dispatch(attendEvent(data)),
  unattendEvent: eventId => dispatch(unattendEvent(eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
