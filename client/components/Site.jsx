import React from 'react';
import style from '../style.css.js';


const Site = ({ url, urlChange }) => (
   <div>
    <div className="siteLabel">
      <label >Site URL</label>
    </div>
    <div className="siteWrapper">
      <input className="siteInput" type="text" placeholder="Enter URL" value={url} onChange={urlChange} />
    </div>
  </div>
);



export default Site;