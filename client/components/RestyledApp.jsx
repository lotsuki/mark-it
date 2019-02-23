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
          <div className="defaultsContainer">
            <div className="defaultsWrapper">
              <div className="bookmarksTitleWrapper">
                <div className="bookmarksTitle">MARK IT</div>
              </div>
              <div className="defaults">
                <div>All</div>
                <div>Read</div>
                <div>Favorites</div>
              </div>
            </div>
          </div>
          <div className="myBookmarksWrapper">
            <div className="myBookmarksTitleWrapper">
              <div className="myBookmarksTitle">My Bookmarks</div>
              <div className="addSubject">+</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default RestyledApp;