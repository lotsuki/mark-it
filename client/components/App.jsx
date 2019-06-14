import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
//import Landing from './Landing.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      bmarks: {},
      links: [],
      colors: {}
    }
    this._isMounted = false;
  }

  //TODO: Fix state being called after unmount, then fix integration test
  componentDidMount() {
    this._isMounted = true;

    fetch('/user', {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, no-cache"
      }
    })
      .then(res => res.json())
      .then(data =>  {
        this.setState({
          userID: data.username,
          bmarks: data.bmarks,
          colors: data.colors
        })
      })
      .catch(err => {
        console.log('GET request failed at /user: ', err)
      });

    fetch('/titles', {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, no-cache"
        }
      })
      .then(res => res.json())
      .then(data =>  {
        this.setState({
          links: data
        })
      })
      .catch(err => {
        console.log('GET request failed at /users: ', err)
      });
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  render() {
    const { userID, bmarks, links, colors } = this.state;
    return (
      // <ErrorBoundary>
        <Main userID={userID} bmarks={bmarks} links={links} colors={colors}/>
      // </ErrorBoundary>
    );
  }
};



export default App;

// <Landing />