import React from 'react';
import PropTypes from 'prop-types';

 class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbarContainer">
        <div className="logoWrapper">
          <div className="logo">Mark It <span className="check">√</span></div>
        </div>
        <div className="navbarWrapper">
          <ul className="navbarLeft">
            <li className="nav"><a href="#">Home</a></li>
            <li className="nav"><a href="#">About</a></li>
            <li className="nav"><a href="#">Contact</a></li>
            <li className="nav"><a href="#">Signout</a></li>
          </ul>
        </div>
    </nav>
    );
  }
}

export default Navbar;



// Navbar.propTypes = {

// };