import React from 'react';

class RestyledApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="restyledContainer">
        <div className="restyledHeaderWrapper">
          <div className="restyledHeader">Organize and prioritize your bookmarks</div>
          <div className="slogan">Slogan goes here</div>
        </div>
        <div className="listsContainer">
          <div className="unreadWrapper">
            <div className="unread"></div>
          </div>
          <div className="readWrapper">
            <div className="read"></div>
          </div>
        </div>
      </div>
    )
  }
}


export default RestyledApp;