import React from 'react';
import { Link } from 'react-router-dom';
import landingPhoto from '../assests/booksmartphoto3.jpg';
import axios from 'axios';

const Landing = () => {
  // const handleGetStartedClick = () => {
  //   axios.get('/welcome')
  //     .then(res => console.log(res, 'res'))
  //     .catch(err => console.log(err, 'err at signup'))
  // };

  return (
    <div className="landing-container">
      <img src={landingPhoto} className="landing-photo" alt="landing-photo"/>
      <div className="landing-text-container">
        <div className="landing-text-wrapper">
          <div className="landing-header-text">Book<span className="smart">smart</span> </div>
          <div className="landing-sub-text">A simple and efficient way to organize bookmarks</div>
          <div className="landing-button-wrapper">
            <Link to="/signup">
              <span className="landing-button" >Sign Up</span>
            </Link>
            <Link to="/login">
              <span className="landing-button" >Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Landing;
