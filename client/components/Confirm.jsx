import React from 'react';

const Confirm = (props) => {
  return (
    <div className="confirm-bontainer">
      <div className="confirm-text-wrapper">
        <div className="confirm-text">Are you sure you want to delete this bookmark?</div>
      </div>
      <div className="confirm-buttons-brapper">
        <button type="button" className="yes-button">Yes</button>
        <button type="button" className="no-button">No</button>
      </div>
    </div>
  )
}

export default Confirm;