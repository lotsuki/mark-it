import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Confirm = ({ setShowConfirm, titleToDelete, subjectOfTitle, showTitlesUpdate }) => {
  const handleConfirmClick = (e) => {
    if (e.target.innerText === 'Yes') {
      setShowConfirm(false);
      axios
       .delete(`bookmarks/${titleToDelete}/${subjectOfTitle}`)
       .then(result => {
         showTitlesUpdate(result.data);
       })
       .catch(err => { console.log('Could not delete document: ', err); });
    } else {
      setShowConfirm(false);
    }
  };

  return (
    <div className="confirm-container">
    <div className="confirm-header">
      <div className="confirm-header-text">Delete</div>
    </div>
      <div className="confirm-text-wrapper">
        <div className="confirm-text">Are you sure you want to delete this bookmark?</div>
      </div>
      <div className="confirm-buttons-wrapper">
        <button type="button" className="confirm-button yes-button" onClick={handleConfirmClick}>Yes</button>
        <button type="button" className="confirm-button no-button" onClick={handleConfirmClick}>No</button>
      </div>
    </div>
  );
};

export default Confirm;


Confirm.propTypes = {
  titleToDelete: PropTypes.string,
  subjectOfTitle: PropTypes.string,
  setShowConfirm: PropTypes.func,
  showTitlesUpdate:PropTypes.func
};

Confirm.defaultProps = {
  titleToDelete: '',
  subjectOfTitle: '',
  setShowConfirm: () => {},
  showTitlesUpdate: () => {}
};
