import React from 'react';
import PropTypes from 'prop-types';

const Confirm = ({ setShowConfirm, titleToDelete, subjectOfTitle, showTitlesUpdate }) => {

  const handleConfirmClick = (e) => {
    if (e.target.innerText === 'Yes') {
      setShowConfirm(false);

      fetch(`bookmarks/${titleToDelete}/${subjectOfTitle}`, {
         method: 'delete'
       })
       .then(res => res.json())
       .then(data => {
         showTitlesUpdate(data);
       })
       .catch(err => { console.log('Could not delete document: ', err); });
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
          <div className="confirm-text">Are you sure you want to delete this bookmark?</div>
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
