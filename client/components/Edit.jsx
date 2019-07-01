import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

//CHANGE: when clicked, show edit options in sidebar


const Edit = ({ bmarks, links }) => {
  var titlesArr = _.pluck(links, 'title');
  var subjects = [];
  var categories = _.map(bmarks, (cat, key) => {
    subjects = subjects.concat(cat);
    return key;
  });

  const [ updatedTitles, setUpdatedTitles ] = useState(links);
  const [ updatedSubjs, setUpdatedSubjs ] = useState(subjects);
  const [ updatedCats, setUpdatedCats ] = useState(categories);

  const resetInput = (e) => {
    let defaultVal = e.target.defaultValue;
    e.target.value = defaultVal;
  };

  const filterItems = (array, item) => {
    return array.filter(str => {
      return str !== item;
    });
  };

  const deleteCategory = (e) => {
    let value = e.target.parentElement.firstChild.value;
    fetch(`delete/cat/${value}`, {
        method: 'delete'
      })
      .then(res => res.json())
      .then(data => {
       console.log(data);
       // showTitlesUpdate(result.data);
      })
      .catch(err => { console.log('Could not delete document: ', err); });
      categories = filterItems(categories, value);
  };

  const deleteSubject = (e) => {
    let value = e.target.parentElement.firstChild.value;

    fetch(`delete/subj/${value}`, {
        method: 'delete'
      })
      .then(res => res.json())
      .then(data => {
       console.log(data);
       // showTitlesUpdate(result.data);
      })
      .catch(err => { console.log('Could not delete document: ', err); });

      subjects = filterItems(subjects, value);
  };

  const deleteTitle = (e) => {
    let value = e.target.parentElement.firstChild.value;
    fetch(`delete/title/${value}`, {
        method: 'delete'
      })
      .then(res => res.json())
      .then(data => {
       titlesArr.concat(filterItems(titlesArr, value));
       // showTitlesUpdate(result.data);
      })
      .catch(err => { console.log('Could not delete document: ', err); });
  };

  const hideIcon = (e) => {
    e.target.parentElement
  };

  const editBookmark = (e) => {
    let defaultVal = e.target.defaultValue;
    let newVal = e.target.value;
    if (e.keyCode === 13) {
      if (categories.indexOf(defaultVal) !== -1) {
        fetch(`/update/cat/${defaultVal}/${newVal}`, {
            method: 'PATCH'
          })
          .then(res => res.json())
          .then(data => {
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
          let patchAPI = fetch.get(`/update/subj/${defaultVal}/${newVal}/${category}`,
            {
              method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
              console.log('PATCH request successful')
              // editUpdate(result);
            })
            .catch(err => { console.log('Error at PATCH request: ', err); });
          Promise.all([assignCategory, patchAPI])
       } else {
          fetch(`/update/title/${defaultVal}/${newVal}`, {
              method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
              console.log('PATCH request successful')
              // editUpdate(result);
            })
            .catch(err => { console.log('Error at PATCH request: ', err); });
       }
    }
  };

  return (
    <div id="edit-container">
      <div className="edit-wrapper">
        <div className="edit-header">Category</div>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <input type="text" defaultValue={category} onBlur={resetInput} onKeyUp={editBookmark} onFocus={hideIcon}/>
              <div className="delete-icon" onClick={deleteCategory}>X</div>
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
              <div className="delete-icon" onClick={deleteSubject}>X</div>

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
                <div className="delete-icon" onClick={deleteTitle}>X</div>
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