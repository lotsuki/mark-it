import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
//import Header from './Header.jsx';
import Quicklinks from './Quicklinks.jsx';
import Bookmarks from './Bookmarks.jsx';
import Dropdown from './Dropdown.jsx';
import Navbar from './Navbar.jsx';
import utils from '../lib/utils.js';

//TODO:
  //unit tests for react
  //search bar at top
  //add bookmarks event
  //site preview for bookmarks with embed tag
  //css

class App extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      quicklinks: [],
      bookmarks: []
    };
    // this.subjectToAddChange = this.subjectToAddChange.bind(this);
    // this.addSubject = this.addSubject.bind(this);
    // this.deleteSubject = this.deleteSubject.bind(this);
    this.updateStateAfterPostReq = this.updateStateAfterPostReq.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
      axios
        .get('/docs')
        .then(result => {
          if (this._isMounted) {
            this.setState({
              data: result.data,
              isLoading: true,
              quicklinks: utils.updateQuicklinks(result.data),
              bookmarks: utils.updateBookmarks(result.data)
            })
           }
         })
        .catch(err => { console.log('Error at GET', err); });
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

//FIX WITH HOOKS
  updateStateAfterPostReq(data) {
    //this.setState({ data })
    location.reload();
  }
  render() {
    const { data, quicklinks, bookmarks} = this.state;
    return (
      <div className="container">
        <Navbar />
        <div className="navbarBorder"></div>
        <div className="appContainer" data-testid="appContainer">
          <div className="sidebarContainer">
            <Quicklinks quicklinks={quicklinks} />
            <Bookmarks bookmarks={bookmarks} />
          </div>
          <div className="sidebarBorder"></div>
          <Form updateStateAfterPostReq={this.updateStateAfterPostReq}/>
        </div>
      </div>
    );
  }
};


//   render() {
//     const { data, quicklinks, bookmarks} = this.state;
//     return (
//       <div className="container">
//         <div className="appContainer" data-testid="appContainer">
//           <Quicklinks quicklinks={quicklinks} />
//           <Bookmarks bookmarks={bookmarks} />
//         </div>
//         <Form updateStateAfterPostReq={this.updateStateAfterPostReq}/>
//       </div>
//     );
//   }
// };


export default App;






  // subjectToAddChange(e) {
  //   this.setState({ subjectToAdd: e.target.value })
  // }

  // addSubject(e) {
  //   e.preventDefault();
  //   var storage = this.state.subjects;

  //   storage.push(this.state.subjectToAdd);
  //   localStorage.setItem('subjects', JSON.stringify(storage));

  //   this.setState({
  //     subjects: storage
  //   })
  //   location.reload();
  // }

  // deleteSubject(e) {
  //   //TODO: refactor, minify
  //   e.preventDefault();
  //   var storage = localStorage.getItem('subjects');
  //   var parsed = JSON.parse(storage);
  //   var subject = this.state.subjectToAdd;

  //   fetch(`/subject/${subject}`, {
  //     method: 'delete',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(result => {
  //     console.log(result, 'RESULT')
  //   })

  //   new Promise((resolve, reject) => {
  //     resolve('ok')
  //   })
  //   .then(() => {
  //     for (var i = 0; i < parsed.length; i++) {
  //       if (subject === parsed[i]) {
  //         parsed.splice(i, 1);
  //       }
  //     }
  //       return parsed;
  //   })
  //   .then(result => {
  //     console.log(result, 'deleted')
  //     localStorage.setItem('subjects', JSON.stringify(result));
  //     this.setState({
  //       subjects: result
  //     })
  //   })
  //   .catch(err => { console.log('Cannot delete subject', err) })

  //   location.reload();
  // }

