import { connect } from 'react-redux';
import Account from './account';

const mapStateToProps = state => ({
  account: state.session.currentUser
});


export default connect(
  mapStateToProps
)(Account);
