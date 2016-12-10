import { connect } from 'react-redux';
import { updateUser } from '../../actions/account_actions';
import Host from './host';

const mapStateToProps = state => ({
  isHost: state.session.currentUser.is_host,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user, undefined))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Host);
