import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import ContentContext from './ContentContext';
import {useTrail, animated} from 'react-spring';

const Titles = () => {
  const { titles, setTitleToDelete, showConfirm, setShowConfirm, setGroupToDelete } = useContext(ContentContext);

  const confirmDelete = async (e) => {
    //let target = e.target
    let doc = document.getElementById('container');
    let confirmContainer = document.getElementById('confirm');
    let title = e.target.parentElement.firstChild.innerText;
    if (!showConfirm) {
      console.log('YES')
      setGroupToDelete('title');
      setShowConfirm(true);
      //deleteTitle(target);
      setTitleToDelete(title);
      if (confirmContainer) {
        confirmContainer.className = 'confirm-container is-visuallyHid';
        doc.className = 'MainContainer is-blurred';
        confirmContainer.className = 'confirm-container';
        doc.parentElement.className = 'ModalOpen';
      }
    } else {
      console.log('no')
      doc.parentElement.className = '';
      doc.className = '';
      confirmContainer.className = 'confirm-container is-hidden is-visuallyHid';
      setShowConfirm(false)
      setGroupToDelete('');
    }
  };

  return (
    <div id="titles-container">
      {
        <div className="titles-sub-container">
          {
            titles.map(title => (
              <div className="title-wrapper" key={title.url}>
                <a target="_blank" href={title.url} className="title" key={title.title}>{title.title}</a>
                <div className="delete-icon" onClick={confirmDelete}>X</div>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
};


export default Titles;




  //const container = ['titles-container']
  // const titlesArr = () => {
  //   if (titlesUpdate) { return titlesUpdate.map(obj => obj.title); }
  //   return titles.map(obj => obj.title);
  // };
  // const urlsArr = links.map(obj => obj.url);
  // const config = {duration: 100};

  // const trail = useTrail(container.length, {
  //   config,
  //   height: 'auto',
  //   from: {height: 0}}
  // );
   //trail.map(( {height}, index )=> ( ))
   // { <animated.div  </animated.div>style={{height}}}

