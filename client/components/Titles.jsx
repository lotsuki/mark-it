import React, { useState } from 'react';
import utils from '../lib/utils.js';
import axios from 'axios';

const Titles = ({ titles }) => {
  const [ hasDeleted, setHasDeleted ] = useState(false);
  const deleteBookmark = (e) => {
    let title = e.target.parentElement.firstChild.innerText;
    axios
      .delete(`bookmarks/${title}`)
      .then(result => {
         setHasDeleted(true);
         location.reload();
      })
      .catch(err => { console.log('Could not delete document: ', err); });
  };

  return (
    <ul className="titlesContainer">
      {
        titles.map(obj => (
          <li key={obj.title} className="titleWrapper">
            <a href={obj.url} className="title" key={obj.title}>{obj.title}
            </a>
            <i className="far fa-trash-alt" onClick={deleteBookmark}></i>
          </li>
        ))
      }
    </ul>

  );
};

//access element when hover
//<div className="invokeGetUrl">{getUrl(obj.url)}</div>

export default Titles;
