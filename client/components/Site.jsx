import React from 'react';
import style from '../style.css.js';


const Site = ({ url, urlChange }) => (
   <div>
    <div style={style.siteLabel}>
      <label >Site URL</label>
    </div>
    <div style={style.siteWrapper}>
      <input style={style.siteInput} type="text" placeholder="Enter URL" value={url} onChange={urlChange} />
    </div>
  </div>
);



export default Site;