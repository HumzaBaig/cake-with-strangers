import React from 'react';
import { Link, hashHistory } from 'react-router';
import SignedInNavContainer from './navs/signed_in_nav_container';
import SignedOutNav from './navs/signed_out_nav';

class HeaderNav extends React.Component {
  constructor(props) {
		super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <SignedInNavContainer />
      );
    } else {
      return (
        <SignedOutNav />
      );
    }
  }

}

export default HeaderNav;
