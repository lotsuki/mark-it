import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      bmarks: {},
      links: []
    }
    this._isMounted = false;
  }

  //TODO: Fix state being called after unmount, then fix integration test
  componentDidMount() {
    this._isMounted = true;

    fetch('/user')
      .then(res => res.json())
      .then(data =>  {
        this.setState({
          userID: data.username,
          bmarks: data.bmarks
        })
      })
      .catch(err => {
        console.log('GET request failed at /user: ', err)
      });

    fetch('/titles')
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
    const { userID, bmarks, links } = this.state;
    return (
      <ErrorBoundary>
        <Main userID={userID} bmarks={bmarks} links={links}/>
      </ErrorBoundary>
    );
  }
};



export default App;

