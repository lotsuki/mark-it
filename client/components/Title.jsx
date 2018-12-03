import React from 'react';


const Title = ({title, titleChange}) => (
  <div>
    <div>
      <label>Title</label>
    </div>
    <input type="text" placeholder="Enter text" value={title} onChange={titleChange} />
  </div>
);



export default Title;