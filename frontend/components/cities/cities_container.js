import { connect } from 'react-redux';
import { requestCities } from '../../actions/cities_actions';
import { allCities } from '../../reducers/selectors';
import Cities from './cities';

const mapStateToProps = ({ cities })=> ({
  cities: allCities({ cities })
});

const mapDispatchToProps = dispatch => ({
  requestCities: () => dispatch(requestCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
