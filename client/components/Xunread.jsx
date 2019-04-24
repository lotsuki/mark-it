import React from 'react';

const Xunread = ({data}) => (
  <div className="unreadWrapper">
    <div className="unreadTitleWrapper">
      <div className="unreadTitle">Unread</div>
      <div className="addSubject">+</div>
    </div>
      {data.map((site, i) => (
        <div className="mainCategory" key={i}>{site.category}</div>
      ))}
  </div>
);

export default Xunread;