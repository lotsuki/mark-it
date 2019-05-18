import React, { useState }from 'react';
import PropTypes from 'prop-types';

const FormInputs = ({ submitForm }) => {
  const [ category, setCategory ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');

  const handleSubmit = e => {
    console.log(e)
    e.preventDefault();
    submitForm(category, subject, title, url);
    clearForm(setCategory, setSubject, setTitle, setUrl);
  };

  const clearForm = (setCategory, setSubject, setTitle, setUrl) => {
    setCategory('');
    setSubject('');
    setTitle('');
    setUrl('');
  };
  return(
    <form className="formContainer" data-testid="form" onSubmit={handleSubmit}>
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