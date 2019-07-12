import React, { useState, useContext } from 'react';
import ContentContext from './ContentContext';
import MainContext from './MainContext';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'underscore';
import utils from '../lib/utils';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

const Form = () => {
  const [ category, setCategory ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ color, setColor ] = useState('#D00000');
  const [ selectCat, setSelectCat ] = useState(false);
  const [ selectSub, setSelectSub ] = useState(false);
  const { groups, groupsID, updatePage } = useContext(ContentContext);
  const { showForm, setShowForm } = useContext(MainContext);

  console.log(category, 'FORM category');
  console.log(subject, 'FORM subject');
  console.log(title, 'FORM title');
  console.log(color, 'FORM color');
  console.log(groups, showForm, 'FORM');

  const clearForm = () => {
    console.log('FORM clearForm func');
    setCategory('');
    setSubject('');
    setTitle('');
    setUrl('');
  };


  const updateGroups = (_groups, _hasCat, _hasSubj, _catID) => {
    if (!_hasCat && !_hasSubj) {
      console.log('FORM submitForm NO CAT NO SUB')
      _groups.push({id: groups.length, category, color, subjects: [{id: 0, subject}]});
      return _groups;
    } else if (!_hasSubj) {
      console.log('FORM submit form YES CAT NO SUB');
      _groups[_catID].subjects.push({id: subjectL, subject});
      return _groups;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const hasCat = utils.hasCategory(groups, category);
    const catID = utils.findCategoryID(groups, category);
    let hasSubj;
    let subjectL;
    if (catID >= 0) {
      hasSubj = utils.hasSubject(groups, subject, catID);
      subjectL = groups[catID].subjects.length;
    }


    console.log(hasCat, catID, hasSubj, subjectL, 'FORM submitForm func');
    if (category && subject && title && url) {
      console.log(showForm, 'FORM showform before api')
      axios.post('/form', {
        groupsID,
        categoryL: groups.length,
        category,
        subject,
        title,
        url,
        date: moment().format('MM-DD-YYYY'),
        hasCat,
        hasSubj,
        catID,
        subjectL,
        foldColor: catID >= 0 ? groups[catID].color : color
        })
        .then(res => {
          console.log(groups, showForm, category, subject, catID, 'FORM submitForm func GROUPS edit before api post');
          console.log(!hasCat && !hasSubj, 'hasCat hasSubj');
          let updatedArr = updateGroups(groups, hasCat, hasSubj, catID);
          updatePage(updatedArr);
          console.log(groups, 'FORM submitForm func GROUPS edit after api post');

          console.log('POST request successful');
        })
        .catch(err => { console.log('Error at POST request', err); });
      clearForm();
      setShowForm(false);
    } else {
      alert('All fields must be filled out')
    }

  };

  // const displaySelectMenu = (className) => {
  //   console.log(className)
  //   if (className === 'category-input') {
  //     setSelectCat(true);
  //   } else if (className === 'subject-input') {
  //     setSelectSub(true);
  //   }
  // };
//onFocus={e => displaySelectMenu(e.target.className)}
  return(
  <Spring
    config={{duration: 2000}}
    from={{ height: 0 }}
    to={{ height: 240}}>
    {props =>
      <div id="form-container">
        <form className="form"
            data-testid="form"
            name="form"
            autoComplete="off"
            onSubmit={submitForm}>
        <div className="form-category-container">
          <div className="cat-input-wrapper">
            <input
              name="form"
              type="text"
              value={category}
              className="category-input"
              data-testid="category-input"
              placeholder="Category"
              onChange={e => setCategory(e.target.value)}
              />
            <input name="form" type="color" defaultValue="#D00000" className="color" onChange={e => setColor(e.target.value)}/>
          </div>
          <div className="form-dropdown-wrapper">
          {
            selectCat &&
            (<ul>
              { categories.map(category => (
                <li>{category}</li>
              ))}
            </ul>)
          }
          </div>
        </div>
        <div className="sub-input-wrapper">
          <input
            name="form"
            type="text"
            value={subject}
            className="subject-input"
            data-testid="subject-input"
            placeholder="Subject"
            onChange={e => {
              setSubject(e.target.value);
            }}/>
        </div>
        <input
          name="form"
          type="text"
          value={title}
          className="form-inputs"
          data-testid="title-input"
          placeholder="Title"
          onChange={e=> setTitle(e.target.value)}/>
        <input
          name="form"
          type="text"
          value={url}
          className="form-inputs"
          data-testid="url-input"
          placeholder="URL"
          onChange={e => setUrl(e.target.value)}/>
        <input
          name="form"
          type="submit"
          className="form-inputs"
          data-testid="submit"
          value="Submit"/>
      </form>
      </div>}
  </Spring>
  );
};


export default Form;



