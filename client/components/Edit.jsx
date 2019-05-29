import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'underscore';
//TODO:
//if didn't press enter in input, return to default value

const Edit = ({ bmarks, titles, editUpdate }) => {
  var titlesArr = _.pluck(titles, 'title');
  var subjects = [];
  var categories = _.map(bmarks, (cat, key) => {
    subjects = subjects.concat(cat);
    return key;
  });

  const [ updatedTitles, setUpdatedTitles ] = useState(titles);
  const [ updatedSubjs, setUpdatedSubjs ] = useState(subjects);
  const [ updatedCats, setUpdatedCats ] = useState(categories);



  const resetInput = (e) => {
    let defaultVal = e.target.defaultValue;
    e.target.value = defaultVal;
  };

  const filterItems = (array, item) => {
    return array.filter(str => {
      return str !== item;
    })
  };

  const deleteBookmark = (e) => {
    let value = e.target.parentElement.firstChild.value;

    if (categories.indexOf(value) !== -1) {
      axios
       .delete(`delete/cat/${value}`)
       .then(result => {
        console.log(result);
         // showTitlesUpdate(result.data);
       })
       .catch(err => { console.log('Could not delete document: ', err); });
      categories = filterItems(categories, value);
      // setUpdate(true);

    } else if (subjects.indexOf(value) !== -1) {
       axios
       .delete(`delete/subj/${value}`)
       .then(result => {
        console.log(result);
         // showTitlesUpdate(result.data);
       })
       .catch(err => { console.log('Could not delete document: ', err); });

       subjects = filterItems(subjects, value);
       // setUpdate(true);

    } else {

      //TODO: NEED TO UPDATE LIST ON DELETE
        axios
         .delete(`delete/title/${value}`)
         .then(result => {
          titlesArr.concat(filterItems(titlesArr, value));
           // showTitlesUpdate(result.data);
         })
         .catch(err => { console.log('Could not delete document: ', err); });
        //setUpdatedTitles(filterItems(titlesArr, value));
    }
  };

  const editBookmark = (e) => {
    let defaultVal = e.target.defaultValue;
    let newVal = e.target.value;
    if (e.keyCode === 13) {
      if (categories.indexOf(defaultVal) !== -1) {
        axios
          .get(`/update/cat/${defaultVal}/${newVal}`, {
            method: 'PATCH'
          })
          .then(result => {
            console.log('PATCH request successful')
            // editUpdate(result);
          })
          .catch(err => { console.log('Error at PATCH request: ', err); });
       } else if (subjects.indexOf(defaultVal) !== -1) {
          let category;
          let assignCategory = _.forEach(bmarks, (cat, key) => {
            if (cat.indexOf(defaultVal) !== -1) {
              category = key;
            }
          });
          let patchAPI = axios.get(`/update/subj/${defaultVal}/${newVal}/${category}`,
            {
              method: 'PATCH'
            })
            .then(result => {
              console.log('PATCH request successful')
              // editUpdate(result);
            })
            .catch(err => { console.log('Error at PATCH request: ', err); });
          Promise.all([assignCategory, patchAPI])
       } else {
          axios
            .get(`/update/title/${defaultVal}/${newVal}`, {
              method: 'PATCH'
            })
            .then(result => {
              console.log('PATCH request successful')
              // editUpdate(result);
            })
            .catch(err => { console.log('Error at PATCH request: ', err); });
       }
    }
  };

  return (
    <div className="edit-main">
      <div className="edit-wrapper">
        <div className="edit-header">Category</div>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <input type="text" defaultValue={category} onBlur={resetInput} onKeyUp={editBookmark}/>
              <img className="delete-icon" src="https://img.icons8.com/ios/50/000000/delete-sign.png" onClick={deleteBookmark}/>

            </li>
          ))}
        </ul>
      </div>
      <div className="edit-wrapper">
        <div className="edit-header">Subject</div>
        <ul>
          {subjects.map(subject => (
            <li key={subject}>
              <input type="text" defaultValue={subject} onKeyUp={editBookmark}/>
              <img className="delete-icon" src="https://img.icons8.com/ios/50/000000/delete-sign.png" onClick={deleteBookmark}/>

            </li>
          ))}
        </ul>
      </div>
      <div className="edit-wrapper">
        <div className="edit-header">Title</div>
        <ul>
          {
            titlesArr.map(title => (
              <li key={title}>
                <input type="text" defaultValue={title} onKeyUp={editBookmark}/>
                <img className="delete-icon" src="https://img.icons8.com/ios/50/000000/delete-sign.png" onClick={deleteBookmark}/>
              </li>
            ))
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
  titles: [],
  displayEdit: () => {},
  editUpdate: () => {}
};


// titlesArr.reduce((a, b) => {
//               if (b.title && b.url) {
//                 return a.concat([<li key={b.title}><input type="text" defaultValue={b.title} onKeyUp={editBookmark}/><img className="delete-icon" src="https://img.icons8.com/ios/50/000000/delete-sign.png" onClick={deleteBookmark}/></li>]);
//               } else {
//                 return a;
//               }
//             }, [])