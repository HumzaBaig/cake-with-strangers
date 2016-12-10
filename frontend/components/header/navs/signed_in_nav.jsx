import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignedInNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
    hashHistory.push("/login");
  }

  render () {

    let cityNav;

    if (this.props.currentUser.city_id) {
      cityNav = <Link to={`/cities/${this.props.currentUser.city_id}`} className="header-link">
                        {this.props.currentUser.city.name}
                      </Link>;
    } else {
      cityNav = <Link to="/cities" className="header-link">Cities</Link>;
    }

    return (
      <nav className="header-nav">
        {cityNav}
        <Link to="/hosting" className="header-link">Hosting</Link>
        <Link to="/dashboard" className="header-link">Dashboard</Link>
        <Link to="/users/edit" className="header-link">Account</Link>
        <Link className="header-link" onClick={this.handleClick}>Sign Out</Link>
      </nav>
    );
  }
}

export default SignedInNav;
