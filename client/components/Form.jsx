import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';


const Form = () => {
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

  const submitForm = () => {
    const form = {
      category,
      subject,
      title,
      url,
      date: moment().format('MM-DD-YYYY')
    };

    if (category && subject && title && url) {
      axios
        .post('/form', form)
        .then(result => {
          //TODO****
          console.log(result);
        })
        .catch(err => { console.log('Could not post document: ', err); });
    }
    clearForm();
  };

  return(
    <form className="form-container" data-testid="form" onSubmit={submitForm}>
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
  );
};


export default Form;



