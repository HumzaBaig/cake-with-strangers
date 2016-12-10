import { connect } from 'react-redux';
import HostPage from './host_page';

const mapStateToProps = state => ({
  session: state.session
});

export default connect(
  mapStateToProps
)(HostPage);
