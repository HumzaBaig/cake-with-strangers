import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import SignedInNav from './signed_in_nav';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInNav);
