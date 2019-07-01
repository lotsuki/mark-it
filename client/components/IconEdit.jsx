import React from 'react';

const IconEdit = ({ showEdit, setShowEdit }) => {
  const displayEdit = () => {
    var appContainer = document.getElementById('app-container');
    var editContainer = document.getElementById('edit-container');
    if (!showEdit) {
      appContainer.style.height = '0';
      appContainer.style.visibility = 'hidden';
      //editContainer.style.gridRow ='2/3';
      setShowEdit(true)
    } else {
      appContainer.style.height = '100%';
      appContainer.style.visibility = 'visible';
      editContainer.style.gridRow ='';
      setShowEdit(false)
    }
  };

  return (
   <div className="edit-icon" data-testid="edit-icon" onClick={displayEdit}>
      <svg className="icon-pencil" xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="10 -25 85 85" fill="#4a51d6" style={{cursor: "pointer"}}>
        <title>pencil</title>
        <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
      </svg>
    </div>
  )
}

export default IconEdit;