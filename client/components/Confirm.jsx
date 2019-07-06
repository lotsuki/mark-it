import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Confirm = ({ groups, setShowConfirm, titleToDelete, subjectOfTitle, showTitlesUpdate, setTitles, titles, groupToDelete, categoryID, setCategoryID, elementForCustomMenu, setElementForCustomMenu, setShowTitles, titlesUpdate, setTitlesUpdate }) => {
  const handleConfirmClick = async (e) => {
    if (e.target.innerText === 'Yes') {
      if (groupToDelete === 'category') {
        let category = elementForCustomMenu.parentElement.children[1].innerText;
        await axios.delete(`/delete/${category}/${categoryID}`)
          .then(res => {
             for (var i = 0; i < groups.length; i++) {
                if (groups[i].id === categoryID) {
                  groups.splice(i, 1);
                }
              }
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
              for (var i = 0; i < titles.length; i++) {
                if (titles[i].title === titleToDelete) {
                  titles.splice(i, 1);
                   setTitles(titles);
                   setTitlesUpdate(titles);
                   //setShowTitles(true);
                  break;
                }
              }
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
