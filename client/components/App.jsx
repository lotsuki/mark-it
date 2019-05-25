import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: null,
      bmarks: []
    }
    this.updateBookmarks = this.updateBookmarks.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get('/docs')
      .then(result => {
        if (this._isMounted) {
          let data = result.data[0];
          this.setState({
            userID: data.username,
            bmarks: data.bmarks
          })
         }
       })
      .catch(err => { console.log('Error at GET: ', err); });
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  updateBookmarks(data) {
    console.log(data)
    this.setState({
      bmarks: data.bmarks
    })
  };

  render() {
    const { userID, bmarks } = this.state;
    console.log(bmarks)
    return (
      <ErrorBoundary>
        <Sidebar userID={userID} bmarks={bmarks} updateBookmarks={this.updateBookmarks}/>
      </ErrorBoundary>
    );
  }
};


export default App;

