import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  hostedEvents: state.session.currentUser.hosted_events,
  attendedEvents: state.session.currentUser.attended_events
});

export default connect(
  mapStateToProps
)(Dashboard);
