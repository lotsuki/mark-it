import React from 'react';
import { Link } from 'react-router-dom';
import landingPhoto from '../assests/booksmartphoto3.jpg';

const Landing = (props) => {
  return (
    <div className="landing-container">
      <img src={landingPhoto} className="landing-photo" alt="landing-photo"/>
      <div className="landing-text-container">
        <div className="landing-text-wrapper">
          <div className="landing-header-text">Book<span className="smart">smart</span> </div>
          <div className="landing-sub-text">A simple and efficient way to organize bookmarks</div>
          <div className="landing-button-wrapper">
            <Link to="/app">
              <span className="landing-button">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Landing;
