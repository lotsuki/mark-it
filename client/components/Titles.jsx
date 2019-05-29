import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const Titles = ({ titles, setTitles, showConfirm, setShowConfirm }) => {

  const confirmDelete = (e) => {
    if (!showConfirm) {
      let subject = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerText;
      let title = e.target.parentElement.firstChild.innerText;
      setShowConfirm([subject, title]);
    } else {
      setShowConfirm(false)
    }
  };

  return (
    <ul className="titles-container">
      {
        titles.map(obj => (
          <li key={obj.title} className="title-wrapper">
            <a href={obj.url} className="title" key={obj.title}>{obj.title}
            </a>
            <i className="far fa-trash-alt" data-testid="delete-title" onClick={confirmDelete}></i>
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
  titles: [],
  setTitles: () => {},
  displayConfirm: () => {}
};
