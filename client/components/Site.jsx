import React from 'react';


const Site = ({ url, urlChange }) => (
  <div>
    <div>
      <label>Site URL</label>
    </div>
    <input type="text" placeholder="Enter URL" value={url} onChange={urlChange} />
  </div>
);



export default Site;