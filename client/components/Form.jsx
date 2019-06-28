import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'underscore';
import { Spring } from 'react-spring/renderprops';


const Form = ({ showForm, setShowForm, bmarks }) => {
  const [ category, setCategory ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');

  let subjects = [];
  let categories = _.map(bmarks, (cat, key) => {
    subjects = subjects.concat(cat);
    return key;
  });

  const clearForm = () => {
    setCategory('');
    setSubject('');
    setTitle('');
    setUrl('');
  };

  const hasCategory = () => {
    return bmarks.hasOwnProperty(category);
  };

  const hasSubject = () => {
    if (bmarks[category] && subject) {
      return bmarks[category].indexOf(subject) !== -1;
    }
    return false;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const data = {
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
          //TODO****
          console.log(data);
        })
        .catch(err => { console.log('Could not post document: ', err); });
    } else {
      alert('All fields must be filled out')
    }
    clearForm();
  };

  const displaySelectMenu = (value) => {
    //check for cat and subj
  };


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
            onSubmit={submitForm}>
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
        <input
          name="form"
          type="text"
          value={subject}
          className="form-inputs"
          data-testid="subject-input"
          placeholder="Subject"
          list="subjects"
          onChange={e => {
            displaySelectMenu(e.target.value);
            setSubject(e.target.value);
          }}/>
        <datalist id="subjects">
          <option>Volvo</option>
          <option>Saab</option>
        </datalist>
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



