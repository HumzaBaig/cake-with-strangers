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
              <img src="http://res.cloudinary.com/dzixj0ktk/image/upload/v1527375211/cakewithstrangerslogo3_ylmfjt.png" />
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
              Lets Get Cake is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.
            </p>
            <br />
            <p>
              We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
