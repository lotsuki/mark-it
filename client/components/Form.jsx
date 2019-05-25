import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';


const Form = ({ }) => {
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
        .post('/', form)
        .then(result => {
          //TODO****
          console.log(result);
        })
        .catch(err => { console.log('Could not post document: ', err); });
    }
    clearForm();
  };

  return(
    <form className="formContainer" data-testid="form" onSubmit={submitForm}>
      <input
        type="text"
        value={category}
        className="formInputs"
        data-testid="category"
        placeholder="Category"
        onChange={e => setCategory(e.target.value)}/>
      <input
        type="text"
        value={subject}
        className="formInputs"
        data-testid="subject"
        placeholder="Subject"
        onChange={e => setSubject(e.target.value)}/>
      <input
        type="text"
        value={title}
        className="formInputs"
        data-testid="title"
        placeholder="Title"
        onChange={e=> setTitle(e.target.value)}/>
      <input
        type="text"
        value={url}
        className="formInputs"
        data-testid="url"
        placeholder="URL"
        onChange={e => setUrl(e.target.value)}/>
      <input
        type="submit"
        className="formInputs"
        data-testid="submit"
        value="Submit"/>
    </form>
  );
};


export default Form;



// Form.propTypes = {
//   updateStateAfterPostReq: PropTypes.func
// };


