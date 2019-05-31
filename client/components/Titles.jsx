import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import helpers from '../lib/utils.js';
import axios from 'axios';
import {useTrail, animated} from 'react-spring';


const Titles = ({ titles, setTitles, showConfirm, setShowConfirm }) => {

  const confirmDelete = async (e) => {
    let target = e.target
    if (!showConfirm) {
      let subject = await helpers.findText(target, 'subject-wrapper', 'leftSide');
      let title = await helpers.findText(target, 'title-wrapper', 'title');
      setShowConfirm([subject, title]);
    } else {
      setShowConfirm(false)
    }
  };


  const container = ['titles-container']
  const titlesArr = titles.map(obj => obj.title);
  const urlsArr = titles.map(obj => obj.url);
  const config = {duration: 400};

  const trail = useTrail(container.length, {
    config,
    opacity: 1,
    height: 400,
    from: {opacity: 0, height: 0}}
  );

  return (
    <div className="titles-container">
      {
        trail.map(( {height, opacity}, index )=> (
          <animated.div
            className="titles-container"
            style={{height, opacity}}
            key={'animation'}>
            {
              titlesArr.map((title, i) => (
                <div className="title-wrapper" key={`${urlsArr[i]}${i}`}>
                  <a href={urlsArr[i]} className="title" key={`${titlesArr[i]}${i}`}>{title}</a>
                  <i className="far fa-trash-alt"  data-testid="delete-title" onClick={confirmDelete}></i>
                </div>
              ))
            }

          </animated.div>
        ))
      }
    </div>

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
