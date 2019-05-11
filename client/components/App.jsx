import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Form from './Form.jsx';
//import Header from './Header.jsx';
import Quicklinks from './Quicklinks.jsx';
import Bookmarks from './Bookmarks.jsx';
import Dropdown from './Dropdown.jsx';

//TODO:
  //unit tests for react
  //api post to set quicklinks and bookmarks (seed db with mock data)
  //dropdown menu for quicklink and bookmark items
  //search bar at top
  //add bookmarks event
  //site preview for bookmarks with embed tag
  //css

class App extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      subjects: [],
      quicklinks: [],
      bookmarks: [],
      // title: '',
      // url: '',
      // subject: '',
      subjectToAdd: '',
      lists: [],
      //category: '',
      // starred: false,
      // favorites: false,
      isLoading: true
    };
    // this.titleChange = this.titleChange.bind(this);
    // this.urlChange = this.urlChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.subjectToAddChange = this.subjectToAddChange.bind(this);
    //this.subjectChange = this.subjectChange.bind(this);
    this.addSubject = this.addSubject.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);
    //this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
    axios.get('/docs')
    .then(result => {this.setState({
      data: result,
      isLoading: true
    })})
    .catch(err => { console.log('Error at GET', err) });
  }

  // titleChange(e) {
  //   this.setState({ title: e.target.value });
  // }

  // urlChange(e) {
  //   this.setState({ url: e.target.value })
  // }

  // subjectChange(e) {
  //   this.setState({ subject: e.target.value })
  // }

  // setCategory(e) {
  //   this.setState({ category: e.target.value })
  // }
  subjectToAddChange(e) {
    this.setState({ subjectToAdd: e.target.value })
  }

  addSubject(e) {
    e.preventDefault();
    var storage = this.state.subjects;

    storage.push(this.state.subjectToAdd);
    localStorage.setItem('subjects', JSON.stringify(storage));

    this.setState({
      subjects: storage
    })
    location.reload();
  }

  deleteSubject(e) {
    //TODO: refactor, minify
    e.preventDefault();
    var storage = localStorage.getItem('subjects');
    var parsed = JSON.parse(storage);
    var subject = this.state.subjectToAdd;

    fetch(`/subject/${subject}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => {
      console.log(result, 'RESULT')
    })

    new Promise((resolve, reject) => {
      resolve('ok')
    })
    .then(() => {
      for (var i = 0; i < parsed.length; i++) {
        if (subject === parsed[i]) {
          parsed.splice(i, 1);
        }
      }
        return parsed;
    })
    .then(result => {
      console.log(result, 'deleted')
      localStorage.setItem('subjects', JSON.stringify(result));
      this.setState({
        subjects: result
      })
    })
    .catch(err => { console.log('Cannot delete subject', err) })

    location.reload();
  }

  // handleSubmit(e) {
  //   var data = {
  //     category: this.state.category,
  //     subject: this.state.subject,
  //     title: this.state.title,
  //     url: this.state.url,
  //     date: moment().format('MM-DD-YYYY'),
  //     starred: this.state.starred,
  //     favorites: this.state.favorites
  //   };

  //   axios.post('/', data)
  //   .then(result => {
  //     this.setState({
  //       data: result
  //     })
  //   })
  //   .catch(err => { console.log('Could not post document', err); });
  // }


  render() {
    const { data, category, subjects, subject, subjectToAdd, title, url, lists} = this.state;
    const { titleChange, subjectChange, urlChange, addSubject, deleteSubject, subjectToAddChange, handleSubmit, setCategory, openDropdown } = this;
    // if (!this.state.isLoading) {
    //   return <div>Loading...</div>
    // }
    return (
      <div className="container">
        <div className="appContainer">
          <Quicklinks quicklinks={this.state.quicklinks}/>
          <Bookmarks bookmarks={this.state.bookmarks} />
        </div>
        <Form setCategory={setCategory} subject={subject} titleChange={titleChange}  subjectChange={subjectChange} urlChange={urlChange} onClick={handleSubmit}/>
      </div>
    );
  }
};

export default App;