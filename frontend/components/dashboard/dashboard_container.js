import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps
)(Dashboard);
