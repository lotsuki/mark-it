import React from 'react';
import PropTypes from 'prop-types';
import utils from '../lib/utils';
import axios from 'axios';

const Confirm = ({ groups, setShowConfirm, titleToDelete, titles, groupToDelete, categoryID, setCategoryID, elementForCustomMenu, setElementForCustomMenu, setTitlesUpdate }) => {

  const handleConfirmClick = async (e) => {
    if (e.target.innerText === 'Yes') {
      if (groupToDelete === 'category') {
        let cat = elementForCustomMenu.parentElement.children[1].innerText;
        await axios.delete(`/delete/${cat}/${categoryID}`)
          .then(res => {
            utils.editCategories(groups, null, null, cat, 'deleteCat');
            elementForCustomMenu.style.visibility = '';
            setCategoryID('');
            setElementForCustomMenu('');
            console.log('DELETE request successful');
          })
          .catch(err => { console.log('Error at PATCH request', err); });
      } else if (groupToDelete === 'subject') {
          console.log('subject');
      } else if(groupToDelete === 'title') {
         await axios.delete(`/delete/${titleToDelete}`)
            .then(res => {
              utils.editTitles(titles, titleToDelete, setTitlesUpdate);
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
