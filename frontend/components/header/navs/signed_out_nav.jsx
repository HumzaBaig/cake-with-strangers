import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignedOutNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    hashHistory.push("/signup");
  }

  render () {
    return (
      <nav className="header-nav">
        <Link to="/cities" className="header-link">Cities</Link>
        <Link to="/hosting" className="header-link">Hosting</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/login" className="header-link">Log In</Link>
        <button className="header-button" onClick={this.handleClick}>
          Sign Up
        </button>
      </nav>
    );
  }
}

export default SignedOutNav;
