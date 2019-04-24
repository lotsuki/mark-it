import React from 'react';
import Dropdown from './Dropdown.jsx';

const Bookmarks = ({data, openDropdown}) => (
  <div className="bookmarksContainer">
    <div className="bookmarksHeaderWrapper">
      <div className="bookmarksHeader">My Bookmarks</div>
      <div className="addBookmark">+</div>
    </div>
    <div className="subjectContainer" onClick={openDropdown}>
      {data.map((site, i) => (
        <Dropdown  key={i} subject={site.subject} sites={site.sites} />
      ))}
    </div>
  </div>
);

export default Bookmarks;