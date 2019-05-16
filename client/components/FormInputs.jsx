import React from 'react';
import PropTypes from 'prop-types';


const FormInputs = ({ setCategory, subjectChange, titleChange, urlChange, handleSubmit}) => (
  <div className="formContainer">
    <input type="text" className="formInputs" placeholder="List category" onChange={setCategory}/>
    <input type="text" className="formInputs" placeholder="Subject" onChange={subjectChange}/>
    <input type="text" className="formInputs" placeholder="Title" onChange={titleChange}/>
    <input type="text" className="formInputs" placeholder="URL" onChange={urlChange}/>
    <input type="submit" className="formInputs" value="Add" onClick={handleSubmit}/>
  </div>
);

export default FormInputs;


FormInputs.propTypes = {
  setCategory: PropTypes.func,
  subjectChange: PropTypes.func,
  titleChange: PropTypes.func,
  urlChange: PropTypes.func,
  handleSubmit: PropTypes.func
};