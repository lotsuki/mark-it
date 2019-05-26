import React, { useState } from 'react';
import utils from '../lib/utils.js';
import axios from 'axios';

const Titles = ({ titles, setTitles }) => {
  const deleteBookmark = (e) => {
    let title = e.target.parentElement.firstChild.innerText;
    let subject = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerText;

    axios
      .delete(`bookmarks/${title}/${subject}`)
      .then(result => {
        setTitles(result.data);
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


export default Titles;
