import React from 'react';

const Confirm = ({ }) => {

  const confirmYes = (e) => {
    console.log(e.target)
  };

  const confirmNo = () => {

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
        <button type="button" className="confirm-button yes-button" onClick={confirmYes}>Yes</button>
        <button type="button" className="confirm-button no-button" onClick={confirmYes}>No</button>
      </div>
    </div>
  );
};

export default Confirm;