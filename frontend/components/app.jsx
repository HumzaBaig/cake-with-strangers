import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './header/greeting_container';
import HeaderNavContainer from './header/header_nav_container';

const App = ({ children }) => (
  <div id="wholepage">
    <header>
      <div className="container">
        <div className="header-contents">
          <div className="header-left">
            <Link to="/" className="logo">
              <img src="http://res.cloudinary.com/dzixj0ktk/image/upload/v1481664189/cake-triangular-piece-handmade-symbol_csrvqn.png" />
              &nbsp;&nbsp;
              <h1> Lets Get Cake!</h1>
            </Link>
          </div>
          <div className="header-right">
            <HeaderNavContainer />
          </div>
        </div>
      </div>
    </header>
    { children }
    <footer>
      <div className="container">
        <div className="footer-container">
          <nav className="footer-nav">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/hosting" className="footer-link">Hosting</Link>
            <Link to="/cities" className="footer-link">Cities</Link>
            <a href="https://www.linkedin.com/in/humza-baig-926071110" className="footer-link">LinkedIn</a>
            <a href="https://github.com/HumzaBaig/cake-with-strangers" className="footer-link">Github</a>
          </nav>
          <div className="ethos-rant">
            <p>
              Eat what it eat, just be willing to pay the pay.
              Blah blah blah blah blah blah blah blah blah blah
              Blah blah blah blah blah blah blah blah blah blah blah
              Blah blah blah blah blah
            </p>
            <br />
            <p>
              Blah blah blah blah blah blah blah blah blah blah
              Blah blah blah blah blah blah blah blah blah blah blah
              Blah blah blah blah blah blah blah blah blah
              Blah blah blah blah blah blah blah
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
