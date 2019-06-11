import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import helpers from '../lib/utils.js';
import {useTrail, animated} from 'react-spring';


const Titles = ({ titles, links, setTitles, showConfirm, setShowConfirm, deleteTitle, titlesUpdate }) => {

  const confirmDelete = async (e) => {
    let target = e.target
    let doc = document.getElementById('container');
    let confirmContainer = document.getElementById('confirm');

    if (!showConfirm) {
      await setShowConfirm(true);
      await deleteTitle(target);
      if (confirmContainer) {
        confirmContainer.className = 'confirm-container is-visuallyHid';
        doc.className = 'MainContainer is-blurred';
        confirmContainer.className = 'confirm-container';
        doc.parentElement.className = 'ModalOpen';
      }
    } else {
      doc.parentElement.className = '';
      doc.className = '';
      confirmContainer.className = 'confirm-container is-hidden is-visuallyHid';
      setShowConfirm(false)
    }
  };

  const container = ['titles-container']
  const titlesArr = () => {
    if (titlesUpdate) { return titlesUpdate.map(obj => obj.title); }
    return titles.map(obj => obj.title);
  };
  const urlsArr = links.map(obj => obj.url);
  const config = {duration: 100};

  const trail = useTrail(container.length, {
    config,
    height: 'auto',
    from: {height: 0}}
  );

  return (
    <div id="titles-container">
      {
        trail.map(( {height}, index )=> (
          <animated.div
            className="titles-sub-container"
            style={{height}}
            key={'animation'}>
            {
              titlesArr().map((title, i) => (
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
