import React from 'react';
import PropTypes from 'prop-types';
import utils from '../lib/utils';
import axios from 'axios';

const Confirm = ({ groups, groupsID, setShowConfirm, titleToDelete, titles, groupToDelete, categoryID, setCategoryID, elementForCustomMenu, setElementForCustomMenu, setTitles }) => {

  const handleConfirmClick = async (e) => {
    if (e.target.innerText === 'Yes') {
      console.log(elementForCustomMenu, 'el')
      if (groupToDelete === 'category') {
        console.log(elementForCustomMenu, 'el for menu')
        let cat = elementForCustomMenu.parentElement.children[1].innerText;
        console.log(cat, 'cat')
        await axios.delete(`/delete/${cat}/${groupsID}`)
          .then(res => {
            utils.deleteCategory(groups, cat);
            elementForCustomMenu.style.visibility = '';
            setCategoryID('');
            setElementForCustomMenu('');
            console.log('DELETE request successful');
          })
          .catch(err => { console.log('Error at DELETE request', err); });
      } else if (groupToDelete === 'subject') {
        let sub = elementForCustomMenu.parentElement.children[1].innerText;
        let catID = utils.findCatIDWithSub(groups, sub);

        await axios.delete(`/delete/${sub}/${catID}/${groupsID}`)
          .then(res => {
            utils.deleteSubject(groups, catID, sub);
            elementForCustomMenu.style.visibility = '';
            setCategoryID('');
            setElementForCustomMenu('');
            console.log('DELETE request successful');
          })
          .catch(err => { console.log('Error at DELETE request', err); });
      } else if(groupToDelete === 'title') {
         await axios.delete(`/delete/${titleToDelete}`)
            .then(res => {
              utils.editTitles(titles, titleToDelete, setTitles);
              console.log('DELETE request successful');
            })
            .catch(err => { console.log('Error at DELETE request', err); });
      }
      setShowConfirm(false);
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


Confirm.propTypes = {
  titleToDelete: PropTypes.string,
  setShowConfirm: PropTypes.func,
};

Confirm.defaultProps = {
  titleToDelete: '',
  setShowConfirm: () => {}
};
