import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import utils from '../lib/utils';
import axios from 'axios';
import ContentContext from './ContentContext';

const Confirm = () => {
  const { groups, groupsID, categoryID, setCategoryID, setShowConfirm, titleToDelete, titles, setTitles, groupToDelete, elementForCustomMenu, setElementForCustomMenu, categoryToDelete, subjectToDelete } = useContext(ContentContext);

  console.log(groups, titleToDelete, titles, groupToDelete, elementForCustomMenu, 'CONFIRM');

  //useEffect(() => {
    //change background style when category changes, use useREf
  //}, [category])
  //check if categoryID has value when delete subject, check if setCatID is necessary
  const handleConfirmClick = async (e) => {
    console.log(groupToDelete, 'CONFIRM handleConfirmClick group');
    if (e.target.innerText === 'Yes') {
      setShowConfirm(false);
      console.log(elementForCustomMenu, 'CONFIRM handleConfirmClick elcustmenu')
      if (groupToDelete === 'category') {
        let cat = elementForCustomMenu.parentElement.children[1].innerText;
        console.log(elementForCustomMenu, cat, categoryID, 'CONFIRM handleConfirmClick cateogry')
        console.log(categoryToDelete, 'CATEGORYTODELTE')
        await axios.delete(`/delete/${categoryToDelete}/${groupsID}`)
          .then(res => {
            console.log(elementForCustomMenu, cat, 'CONFIRM handleConfirmClick category delete api res');
            utils.deleteCategory(groups, categoryToDelete);
            setCategoryID('');
            setElementForCustomMenu('');
            console.log('DELETE request successful');
          })
          .catch(err => { console.log('Error at DELETE request', err); });
      } else if (groupToDelete === 'subject') {
        // let sub = elementForCustomMenu.parentElement.children[1].innerText;
        console.log(categoryID, 'categoryID')
        console.log(elementForCustomMenu, subjectToDelete, categoryID, 'CONFIRM handleConfirmClick subject group');
        console.log(groupsID, subjectToDelete, 'subjectToDelete')
        await axios.delete(`/delete/${subjectToDelete}/${categoryID}/${groupsID}`)
          .then(res => {
            console.log(groupsID, subjectToDelete, categoryID, 'CONFIRM handleConfirmClick subject delete api res');
            utils.deleteSubject(groups, categoryID, subjectToDelete);
            setCategoryID('');
            setElementForCustomMenu('');
            console.log('DELETE request successful');
          })
          .catch(err => { console.log('Error at DELETE request', err); });
      } else if(groupToDelete === 'title') {
        console.log(titleToDelete, 'titletodelete')
         await axios.delete(`/delete/${titleToDelete}`)
            .then(res => {
              utils.editTitles(titles, titleToDelete, setTitles);
              console.log('DELETE request successful');
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

