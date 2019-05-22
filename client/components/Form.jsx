import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInputs from './FormInputs.jsx';
import axios from 'axios';
import moment from 'moment';


const Form = ({ }) => {
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
          //TODO****
          console.log(result);
        })
        .catch(err => { console.log('Could not post document', err); });
    }
  }

  return(
    <FormInputs submitForm={submitForm}/>
  );
};


export default Form;



// Form.propTypes = {
//   updateStateAfterPostReq: PropTypes.func
// };


