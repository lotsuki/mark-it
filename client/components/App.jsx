import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import moment from 'moment';
import Subjects from './Subjects.jsx';
import Title from './Title.jsx';
import Site from './Site.jsx';
import AddSubjects from './AddSubjects.jsx';
import style from '../style.css.js';
import Header from './Header.jsx';


class App extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.state = {
      title: '',
      url: '',
      subject: '',
      subjectToAdd: '',
      subjects: [],
      docs: []
    };
    this.titleChange = this.titleChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.subjectToAddChange = this.subjectToAddChange.bind(this);
    this.subjectChange = this.subjectChange.bind(this);
    this.addSubject = this.addSubject.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);

  }

  componentDidMount() {
    fetch ('/docs')
    .then(res => { return res.json() })
    .then(data => { this.setState({
      docs: data
    })})
    .catch(err => { console.log('Error at GET', err) })

  //get subjects from local storage
   var subjectArray = [];
    for (var key in localStorage) {
      if (typeof localStorage[key] === 'string') {
        subjectArray.push(localStorage[key]);
      }
    }
    this.setState({
      subjects: subjectArray
    })
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }

  urlChange(e) {
    this.setState({ url: e.target.value })
  }
  subjectToAddChange(e) {
    this.setState({ subjectToAdd: e.target.value})
  }
  subjectChange(e) {
    this.setState({ subject: e.target.value})
  }
  addSubject(e) {
    e.preventDefault();
    localStorage.setItem(this.state.subjectToAdd, this.state.subjectToAdd);
    location.reload();
  }

  deleteSubject(e) {
    e.preventDefault();
    localStorage.removeItem(this.state.subjectToAdd);
    location.reload();
  }

  handleSubmit() {
    var data = {
      title: this.state.title,
      url: this.state.url,
      subject: this.state.subject,
      date: moment().format('MM-DD-YYYY')
    }
    fetch('/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( res => res.json() )
    .then( data => this.setState({
      docs: data
    }))
    .catch(err => { console.log('Could not post document', err); })
  }

  render() {
    return (
      <div style={style.container}>
        <Header />
        <div style={style.formContainer}>
          <div style={style.formWrapper}>
            <form style={style.form} onSubmit={this.handleSubmit}>
              <Title title={this.state.title} titleChange={this.titleChange}/>
              <Site url={this.state.url} urlChange={this.urlChange}/>
              <Subjects subjects={this.state.subjects} handleChange={this.subjectChange}/>
              <div style={style.submitWrapper}>
                <input style={style.submit} type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <AddSubjects subjects={this.state.subjects} subjectToAdd={this.state.subjectToAdd} subjectToAddChange={this.subjectToAddChange} addSubject={this.addSubject} deleteSubject={this.deleteSubject}/>
        <div>
        </div>
      </div>


    );
  }
};

export default App;