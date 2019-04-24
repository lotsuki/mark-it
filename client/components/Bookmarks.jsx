import React from 'react';
import Dropdown from './Dropdown.jsx';

const Bookmarks = ({data, openDropdown}) => (
  <div className="unreadWrapper">
    <div className="unreadTitleWrapper">
      <div className="unreadTitle">My Bookmarks</div>
      <div className="addSubject">+</div>
    </div>
    <div className="subjectsContainer" onClick={openDropdown}>
      {data.map((site, i) => (
        <Dropdown  key={i} subject={site.subject} sites={site.sites} />
      ))}
    </div>
  </div>
);

export default Bookmarks;