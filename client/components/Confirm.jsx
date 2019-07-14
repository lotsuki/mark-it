import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import utils from '../lib/utils';
import axios from 'axios';
import ContentContext from './ContentContext';
import MainContext from './MainContext';

const Confirm = () => {
  const { groups, groupsID, categoryID, setCategoryID, setShowConfirm, titleToDelete, titles, setTitles, groupToDelete, elementForCustomMenu, setElementForCustomMenu, categoryToDelete, subjectToDelete, setSubjectToDelete } = useContext(ContentContext);
  const { links } = useContext(MainContext);

  //handles click to delete item
  const handleConfirmClick = async (e) => {
    if (e.target.innerText === 'Yes') {
      setShowConfirm(false);
      let updatedGroups;

      //delete category
      if (groupToDelete === 'category') {
        let cat = elementForCustomMenu.parentElement.children[1].innerText;

        //send request and exit custom menu
        try {
          const res = await axios.delete(`/delete/category/${categoryToDelete}/${groupsID}`);

          //update indices of categories
          updatedGroups = utils.deleteCategory(groups, categoryToDelete);
          setCategoryID('');
          setElementForCustomMenu('');
        } catch(err) { console.log('Error at delete category: ', err); }

        //update database with new groups array
        try {
          if (updatedGroups.length > 1) {
            const postRes = await axios.post('/update/catIds', updatedGroups);
          }
        } catch(err) { console.log('Error at update category groups: ', err); }

      //delete subject
      } else if (groupToDelete === 'subject') {

        //send request, exit custom menu and update page
        try {
          const resSub = await axios.delete(`/delete/subject/${subjectToDelete}/${categoryID}/${groupsID}`);

          //update subject indices
          updatedGroups =  utils.deleteSubject(groups, categoryID, subjectToDelete);
          setElementForCustomMenu('');
          setSubjectToDelete('');
        } catch(err) {
          console.log('Error at delete subject: ', err);
        }

        //update database with new groups array
        try {
          if (updatedGroups.length > 1) {
            const postSubRes = await axios.post(`/update/subIds/${categoryID}`, updatedGroups);
          }
        } catch(err) {
          console.log('Error at update subject groups: ', err);
        }

      //delete title
      } else if(groupToDelete === 'title') {
        let titl = titleToDelete[0];
        let subjectOfTitle = titleToDelete[1];
          axios.delete(`/delete/title/${titl}/${subjectOfTitle}`)
            .then(res => {
              setTitles(res.data);
            })
            .catch(err => { console.log('Error at DELETE request', err); });
      }
    } else {
      setShowConfirm(false);
    }
  };

  return (
    <div id="confirm" className="confirm-container is-hidden is-visuallyHid">
    <div className="confirm-wrapper">
      <div className="confirm-header">
        <div className="confirm-header-text">Delete</div>
      </div>
        <div className="confirm-text-wrapper">
          <div className="confirm-text">Are you sure you want to delete this item?</div>
        </div>
        <div className="confirm-buttons-wrapper">
          <button type="button" className="confirm-button yes-button" onClick={handleConfirmClick}>Yes</button>
          <button type="button" className="confirm-button no-button" onClick={handleConfirmClick}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

