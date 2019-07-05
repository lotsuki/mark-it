import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'underscore';
import { Spring } from 'react-spring/renderprops';


const Form = ({ groups, showForm, setShowForm, setCategoryID, categoryID }) => {
  const [ category, setCategory ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ selectCat, setSelectCat ] = useState(false);
  const [ selectSub, setSelectSub ] = useState(false);

  let subjects = [];
  let categories = groups.map((group, i) => {
    group.subjects.forEach(subject => {
      subjects.push(subject.subject);
    });
    return group.category;
  });
  console.log(subjects, 'subjs');
  console.log(categories, 'cats');

  //  _.map(bmarks, (cat, key) => {
  //   subjects = subjects.concat(cat);
  //   return key;
  // });

  const clearForm = () => {
    setCategory('');
    setSubject('');
    setTitle('');
    setUrl('');
  };

  const hasCategory = () => {
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].category === category) {
        setCategoryID(groups[i].id);
        return true;
      }
    }
    return false;
    //return categories.indexOf(category) !== -1;
    //return bmarks.hasOwnProperty(category);
  };

  const hasSubject = () => {
    return subjects.indexOf(subject) !== -1;
  };

  const submitForm = (e) => {

    e.preventDefault();
    console.log(hasCategory(), hasSubject(), 'hascatandsub')
    const data = {
      categoryL: groups.length,
      categoryID,
      category,
      subject,
      title,
      url,
      date: moment().format('MM-DD-YYYY'),
      hasCategory: hasCategory(),
      hasSubject: hasSubject()
    };

    if (category && subject && title && url) {
      fetch('/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(data => {
          console.log(hasCategory(), hasSubject(), 'after req')
          //if (!hasCategory() && !hasSubject()) {
            groups.push({id: groups.length, category, color: 'blue', subjects: [{id: 0, subject}]})
         // }
         setShowForm(false);
        })
        .catch(err => { console.log('Could not post document: ', err); });
    } else {
      alert('All fields must be filled out')
    }
    clearForm();
  };

  const displaySelectMenu = (className) => {
    console.log(className)
    if (className === 'category-input') {
      setSelectCat(true);
    } else if (className === 'subject-input') {
      setSelectSub(true);
    }
  };
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

            <input name="form" type="color" defaultValue="#D00000" className="color"/>
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



