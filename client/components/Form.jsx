import React, { useState } from 'react';
import PropTypes from 'prop-types';
import App from './App.jsx';
import FormInputs from './FormInputs.jsx';
import axios from 'axios';
import moment from 'moment';


const Form = ({ updateStateAfterPostReq }) => {
  const [ form, setForm ] = useState({});

  const submitForm = (category, subject, title, url) => {
    const form = {
      category,
      subject,
      title,
      url,
      date: moment().format('MM-DD-YYYY'),
      starred: false,
      favorites: false
    };
    if (category && subject && title && url) {
      axios
        .post('/', form)
        .then(result => {
          updateStateAfterPostReq(result.data);
        })
        .catch(err => { console.log('Could not post document', err); });
    }
  }

  return(
    <FormInputs submitForm={submitForm}/>
  );
};


export default Form;



Form.propTypes = {
  updateStateAfterPostReq: PropTypes.func
};


