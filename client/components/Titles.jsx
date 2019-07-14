import React, { useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import ContentContext from './ContentContext';

const Titles = () => {
  const { titles, setTitleToDelete, showConfirm, setShowConfirm, setGroupToDelete } = useContext(ContentContext);

  const confirmDelete = async (e, subject) => {
    //let target = e.target
    let doc = document.getElementById('container');
    let confirmContainer = document.getElementById('confirm');
    let title = e.target.parentElement.firstChild.innerText;
    if (!showConfirm) {
      setGroupToDelete('title');
      setShowConfirm(true);
      //deleteTitle(target);
      setTitleToDelete([title, subject]);
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
                <div className="delete-icon" onClick={(e) => confirmDelete(e, title.subject)}>X</div>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
};


export default Titles;


