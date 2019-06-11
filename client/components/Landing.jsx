import React from 'react';

const Landing = (props) => {
  return (
    <div className="landing-container">
      <div className="landing-header-container">
        <div className="landing-logo-wrapper">
          <div className="landing-logo-title">Booksmart</div>
          <i className="fas fa-bookmark" className="landing-logo"></i>
        </div>
        <div className="landing-header-wrapper">
        <div className="landing-header">
          <div className="landing-main-text-wrapper">
            <span className="landing-main-text">Bookmark with Book <span className="smart">smart</span> </span>
          </div>
          <span className="landing-text-sub">A simple and efficient way to store your bookmarks</span>
          </div>
        </div>
      </div>
      <div className="landing-button-wrapper">
        <button type="button" className="landing-button">Get Started</button>
      </div>
    </div>
  );
};

export default Landing;