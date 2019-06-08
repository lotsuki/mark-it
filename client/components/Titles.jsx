import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import helpers from '../lib/utils.js';
import axios from 'axios';
import {useTrail, animated} from 'react-spring';


const Titles = ({ titles, links, setTitles, showConfirm, setShowConfirm }) => {

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
  const titlesArr = links.map(obj => obj.title);
  const urlsArr = links.map(obj => obj.url);
  const config = {duration: 100};

  const trail = useTrail(container.length, {
    config,
    height: 'auto',
    from: {height: 0}}
  );

  return (
    <div className="titles-sub-container">
      {
        trail.map(( {height}, index )=> (
          <animated.div
            className="titles-sub-container"
            style={{height}}
            key={'animation'}>
            {
              titlesArr.map((title, i) => (
                <div className="title-wrapper" key={`${urlsArr[i]}${i}`}>
                  <a target="_blank" href={urlsArr[i]} className="title" key={`${titlesArr[i]}${i}`}>{title}</a>
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
  links: PropTypes.array,
  setTitles: PropTypes.func,
  displayConfirm: PropTypes.func
};

Titles.defaultProps = {
  links: [],
  setTitles: () => {},
  displayConfirm: () => {}
};
