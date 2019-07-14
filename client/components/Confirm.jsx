import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import utils from '../lib/utils';
import axios from 'axios';
import ContentContext from './ContentContext';

const Confirm = () => {
  const { groups, groupsID, categoryID, setCategoryID, setShowConfirm, titleToDelete, titles, setTitles, groupToDelete, elementForCustomMenu, setElementForCustomMenu, categoryToDelete, subjectToDelete, setSubjectToDelete } = useContext(ContentContext);

  //useEffect(() => {
    //change background style when category changes, use useREf
  //}, [category])
  //check if categoryID has value when delete subject, check if setCatID is necessary
  const handleConfirmClick = async (e) => {
    if (e.target.innerText === 'Yes') {
      setShowConfirm(false);
      let updatedGroups;
      if (groupToDelete === 'category') {
        let cat = elementForCustomMenu.parentElement.children[1].innerText;
        try {
          const res = await axios.delete(`/delete/category/${categoryToDelete}/${groupsID}`);
          updatedGroups = utils.deleteCategory(groups, categoryToDelete);
          setCategoryID('');
          setElementForCustomMenu('');
        } catch(err) { console.log('Error at delete category: ', err); }
        try {
          const postRes = await axios.post('/update/catIds', updatedGroups);
        } catch(err) { console.log('Error at update category groups: ', err); }
      } else if (groupToDelete === 'subject') {
        try {
          const resSub = await axios.delete(`/delete/subject/${subjectToDelete}/${categoryID}/${groupsID}`);
          updatedGroups =  utils.deleteSubject(groups, categoryID, subjectToDelete);
          setElementForCustomMenu('');
          setSubjectToDelete('');
        } catch(err) {
          console.log('Error at delete subject: ', err);
        }

        try {
          const postSubRes = await axios.post(`/update/subIds/${categoryID}`, updatedGroups);
        } catch(err) {
          console.log('Error at update subject groups: ', err);
        }
      } else if(groupToDelete === 'title') {
        let titl = titleToDelete[0];
        let subjectOfTitle = titleToDelete[1];
          axios.delete(`/delete/title/${titl}/${subjectOfTitle}`)
            .then(res => {
              setTitles(res.data);
              // utils.editTitles(titles, titleToDelete, setTitles);
              // console.log('DELETE request successful');
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

