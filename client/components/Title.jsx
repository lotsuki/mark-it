import React from 'react';


const Title = ({title, titleChange}) => (
  <div>
    <div className="titleLabel">
      <label >Title</label>
    </div>
    <div className="titleWrapper">
      <input className="titleInput" type="text" placeholder="Enter text" value={title} onChange={titleChange} />
    </div>
  </div>
);



export default Title;