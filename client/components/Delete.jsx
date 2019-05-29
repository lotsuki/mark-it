// import React, { useState } from 'react';

// const Delete = ({ showTitlesUpdate, confirmDelete }) => {
//   const [ deleteItem, setDeleteItem ] = useState(false);

//   const handleDelete = (item, location, e) => {
//   if (location === 'sidebar') {
//     if (e.target.innerText === 'Yes') {
//       setShowConfirm(false);
//       axios
//        .delete(`bookmarks/${titleToDelete}/${subjectOfTitle}`)
//        .then(result => {
//          setDeleteItem(true);
//          showTitlesUpdate(result.data);
//        })
//        .catch(err => { console.log('Could not delete document: ', err); });
//     } else {
//       setShowConfirm(false);
//     }
//   } else if (location === 'edit') {

//   } else {
//     return null;
//   }


//   return (
//       <i className="far fa-trash-alt" data-testid="delete-title" onClick={confirmDelete}></i>
//   )
// }

// export default Delete;