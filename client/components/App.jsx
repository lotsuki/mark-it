import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
//import Header from './Header.jsx';
import Quicklinks from './Quicklinks.jsx';
import Bookmarks from './Bookmarks.jsx';
import Dropdown from './Dropdown.jsx';
import Sidebar from './Sidebar.jsx';
import helpers from '../lib/helpers.js';

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
      subjectToAdd: '',
      lists: [],
      isLoading: true
    };
    this.subjectToAddChange = this.subjectToAddChange.bind(this);
    this.addSubject = this.addSubject.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);
  }

  componentDidMount() {
    axios.get('/docs')
    .then(result => {this.setState({
      data: result.data,
      isLoading: true,
      quicklinks: helpers.updateQuicklinks(result.data)[0],
      bookmarks: helpers.updateBookmarks(result.data)
    })})
    .catch(err => { console.log('Error at GET', err) });
  }

  updateStateAfterPostReq(data) {
    this.setState({ data })
  }

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




  render() {

    const { data, quicklinks, bookmarks} = this.state;
    const { openDropdown } = this;
    console.log(quicklinks, 'quicklinks')
    console.log(bookmarks, 'bookmarks')
    // if (!this.state.isLoading) {
    //   return <div>Loading...</div>
    // }
    return (
      <div className="container">
        <div className="appContainer">
          <Quicklinks quicklinks={quicklinks}/>
          <Bookmarks bookmarks={data, bookmarks} />
        </div>
        <Form updateStateAfterPostReq={helpers.updateStateAfterPostReq}/>
        <Sidebar data={data} quicklinks={quicklinks} bookmarks={bookmarks}/>
      </div>
    );
  }
};

export default App;