import React, { useEffect } from 'react';
import utils from '../lib/utils.js';

const Titles = ({ titles }) => {
  return (
    <ul className="titlesContainer">
      {
        titles.map(obj => (
          <li key={obj.title} className="titleWrapper">
            <a href={obj.url} className="title" key={obj.title}>{obj.title}
            </a>
            <i className="far fa-trash-alt"></i>
          </li>
        ))
      }
    </ul>

  );
};

//access element when hover
//<div className="invokeGetUrl">{getUrl(obj.url)}</div>

export default Titles;
