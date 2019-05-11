import React from 'react';
import App from './App.jsx';



class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      category: '',
      subject: '',
      title: '',
      url: '',
      starred: false,
      favorites: false,
    };
    this.titleChange = this.titleChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.subjectChange = this.subjectChange.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }
  urlChange(e) {
    this.setState({ url: e.target.value })
  }

  subjectChange(e) {
    this.setState({ subject: e.target.value })
  }

  setCategory(e) {
    this.setState({ category: e.target.value })
  }

  handleSubmit(e) {
    var data = {
      category: this.state.category,
      subject: this.state.subject,
      title: this.state.title,
      url: this.state.url,
      date: moment().format('MM-DD-YYYY'),
      starred: this.state.starred,
      favorites: this.state.favorites
    };

    axios.post('/', data)
    .then(result => {
      this.setState({
        data: result
      })
    })
    .catch(err => { console.log('Could not post document', err); });
  }


  render() {
    const { titleChange, subjectChange, urlChange, handleSubmit, setCategory} = this;
    return(
      <div className="formContainer">
        <input type="text" className="inputList" placeholder="List category" onChange={setCategory}/>
        <input type="text" className="inputSubject" placeholder="Subject" onChange={subjectChange}/>
        <input type="text" className="inputTitle" placeholder="Title" onChange={titleChange}/>
        <input type="text" className="inputURL" placeholder="URL" onChange={urlChange}/>
        <input type="submit" value="Add" onClick={handleSubmit}/>
      </div>
    );
  }
};


export default Form;