import React from 'react';
import App from './App.jsx';

//TODO: REFACTOR TO CLASS AND ADD FUNCTIONS FROM APP

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    const { titleChange, subjectChange, urlChange, handleSubmit, setCategory, onClick } = this.props;
    return(
      <div className="formContainer">
        <input type="text" className="inputList" placeholder="List category" onChange={setCategory}/>
        <input type="text" className="inputSubject" placeholder="Subject" onChange={subjectChange}/>
        <input type="text" className="inputTitle" placeholder="Title" onChange={titleChange}/>
        <input type="text" className="inputURL" placeholder="URL" onChange={urlChange}/>
        <input type="submit" value="Add" onClick={onClick}/>
      </div>
    );
  }
};


export default Form;