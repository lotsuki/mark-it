import React from 'react';
import style from '../style.css.js';


const Title = ({title, titleChange}) => (
  <div>
    <div style={style.titleLabel}>
      <label >Title</label>
    </div>
    <div style={style.titleWrapper}>
      <input style={style.titleInput} type="text" placeholder="Enter text" value={title} onChange={titleChange} />
    </div>
  </div>
);



export default Title;