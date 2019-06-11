import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import { Spring } from 'react-spring/renderprops';


const Form = ({ showForm, bmarks }) => {
  const [ category, setCategory ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');

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
    const form = {
      category,
      subject,
      title,
      url,
      date: moment().format('MM-DD-YYYY'),
      hasCategory: hasCategory(),
      hasSubject: hasSubject()
    };

    if (category && subject && title && url) {
      axios
        .post('/form', form)
        .then(result => {
          //TODO****
          console.log(result);
        })
        .catch(err => { console.log('Could not post document: ', err); });
    } else {
      alert('All fields must be filled out')
    }
    clearForm();
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
            onSubmit={submitForm}>
        <input
          type="text"
          value={category}
          className="form-inputs"
          data-testid="category-input"
          placeholder="Category"
          onChange={e => setCategory(e.target.value)}/>
        <input
          type="text"
          value={subject}
          className="form-inputs"
          data-testid="subject-input"
          placeholder="Subject"
          onChange={e => setSubject(e.target.value)}/>
        <input
          type="text"
          value={title}
          className="form-inputs"
          data-testid="title-input"
          placeholder="Title"
          onChange={e=> setTitle(e.target.value)}/>
        <input
          type="text"
          value={url}
          className="form-inputs"
          data-testid="url-input"
          placeholder="URL"
          onChange={e => setUrl(e.target.value)}/>
        <input
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



