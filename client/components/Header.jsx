import React from 'react';

const Header = () => (
  <div>
    <div className="header"><span className="popup">
    <a className="openPopup" href="#popup1">#</a></span>Organize and prioritize </div>
    <div className="header">your bookmarks</div>
    <div id="popup1" className="popupContainer">
      <div className="popupWrapper">
        <div>Here I am</div>
        <a className="closePopup" href="#">&times;</a>
        <div className="popupContent">Thanks for poping me</div>
      </div>
    </div>

    <div className="slogan">Slogan goes here</div>
  </div>
);


export default Header;