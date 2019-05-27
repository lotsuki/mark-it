import React, { useState } from 'react';
import PropTypes from 'prop-types';
import utils from '../lib/utils.js';
import axios from 'axios';

const Titles = ({ titles, setTitles, displayConfirm }) => {

  const confirmDelete = (e) => {
    let subject = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerText;
    let title = e.target.parentElement.firstChild.innerText;
    displayConfirm(subject, title);
  };

  return (
    <ul className="titles-container">
      {
        titles.map(obj => (
          <li key={obj.title} className="title-wrapper">
            <a href={obj.url} className="title" key={obj.title}>{obj.title}
            </a>
            <i className="far fa-trash-alt" onClick={confirmDelete}></i>
          </li>
        ))
      }
    </ul>

  );
};


export default Titles;

Titles.propTypes = {
  titles: PropTypes.array,
  setTitles: PropTypes.func,
  displayConfirm: PropTypes.func
};

Titles.defaultProps = {
  titles: []
};
