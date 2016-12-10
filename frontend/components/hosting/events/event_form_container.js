import { connect } from 'react-redux';
import { createEvent } from '../../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createEvent: data => dispatch(createEvent(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
