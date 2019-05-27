import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'underscore';
//TODO:
//if didn't press enter in input, return to default value

const Edit = ({ bmarks, titles, displayEdit, editUpdate }) => {
  let subjects = [];
  let categories = _.map(bmarks, (cat, key) => {
    subjects = subjects.concat(cat);
    return key;
  });

  const editBookmark = (e) => {
    if (e.keyCode === 13) {
      let defaultVal = e.target.defaultValue;
      let newVal = e.target.value;
      console.log(defaultVal, newVal);
      axios
        .get(`/update/cat/${defaultVal}/${newVal}`, {
          method: 'PATCH'
        })
        .then(result => {
          console.log('PATCH request successful')
          console.log(result)
          // editUpdate(result);
        })
        .catch(err => { console.log('Error at PATCH request: ', err); });
    }


    // if (categories.indexOf(defaultValue) !== -1) {
    //   axios
    //     .get(`/update/cat/${defaultValue}/${newValue}`, {
    //       method: 'PATCH'
    //     })
    //     .then(result => {
    //       console.log('PATCH request successful')
    //       editUpdate(result);
    //     })
    //     .catch(err => { console.log('Error at PATCH request: ', err); });
    // } else if (subjects.indexOf(defaultValue) !== -1) {
    //   axios
    //     .get(`/update/subj/${defaultValue}/${newValue}`, {
    //       method: 'PATCH'
    //     })
    //     .then(result => {
    //       console.log('PATCH request successful')
    //       editUpdate(result);
    //     })
    //     .catch(err => { console.log('Error at PATCH request: ', err); });
    // } else {
    //   axios
    //     .get(`/update/title/${defaultValue}/${newValue}`, {
    //       method: 'PATCH'
    //     })
    //     .then(result => {
    //       console.log('PATCH request successful')
    //       editUpdate(result);
    //     })
    //     .catch(err => { console.log('Error at PATCH request: ', err); });
     //}
  };

  return (
    <div className="edit-main">
      <div className="edit-wrapper">
        <div className="edit-header">Category</div>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <img className="delete-icon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/>
              <input type="text" defaultValue={category} onKeyUp={editBookmark}/>
            </li>
          ))}
        </ul>
      </div>
      <div className="edit-wrapper">
        <div className="edit-header">Subject</div>
        <ul>
          {subjects.map(subject => (
            <li key={subject}>
              <img className="delete-icon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/>
              <input type="text" defaultValue={subject} onKeyPress={editBookmark}/>
            </li>
          ))}
        </ul>
      </div>
      <div className="edit-wrapper">
        <div className="edit-header">Title</div>
        <ul>
          {
            titles.reduce((a, b) => {
              if (b.title && b.url) {
                return a.concat([<li key={b.title}><a href={b.url} key={b.url}><img className="delete-icon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/><input type="text" defaultValue={b.title} onKeyPress={editBookmark}/></a></li>]);
              } else {
                return a;
              }
            }, [])
          }
        </ul>
      </div>
    </div>
  );
};

export default Edit;

Edit.propTypes = {
  bmarks: PropTypes.object,
  titles: PropTypes.array,
  displayEdit: PropTypes.func,
  editUpdate:PropTypes.func
};

Edit.defaultProps = {
  bmarks: {},
  titles: []
};