import React from 'react';
import PropTypes from 'prop-types';

const FormInputs = ({ setCategory, subjectChange, titleChange, urlChange, handleSubmit}) => (
  <div className="formContainer" data-testid="form" onSubmit={handleSubmit}>
    <input type="text" className="formInputs" data-testid="category"placeholder="Category" onChange={setCategory}/>
    <input type="text" className="formInputs" data-testid="subject" placeholder="Subject" onChange={subjectChange}/>
    <input type="text" className="formInputs" data-testid="title" placeholder="Title" onChange={titleChange}/>
    <input type="text" className="formInputs" data-testid="url" placeholder="URL" onChange={urlChange}/>
    <input type="submit" className="formInputs" data-testid="submit" value="Submit"/>
  </div>
);

// class FormInputs extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//     }

//   }

//   render() {
//     const { handleSubmit, setCategory, subjectChange, titleChange, urlChange } = this.props;
//     return (
//       <form className="formContainer" data-testid="form" onSubmit={handleSubmit}>
//         <input type="text" className="formInputs" data-testid="category"placeholder="Category" onChange={setCategory}/>
//         <input type="text" className="formInputs" data-testid="subject" placeholder="Subject" onChange={subjectChange}/>
//         <input type="text" className="formInputs" data-testid="title" placeholder="Title" onChange={titleChange}/>
//         <input type="text" className="formInputs" data-testid="url" placeholder="URL" onChange={urlChange}/>
//         <input type="submit" className="formInputs" className="submitForm" data-testid="submit" value="Submit" />
//       </form>
//     );
//   }
// }




export default FormInputs;


FormInputs.propTypes = {
  setCategory: PropTypes.func,
  subjectChange: PropTypes.func,
  titleChange: PropTypes.func,
  urlChange: PropTypes.func,
  handleSubmit: PropTypes.func
};