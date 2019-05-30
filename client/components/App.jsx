import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      bmarks: {},
      titles: []
    }
    this._isMounted = false;
  }

  //TODO: Fix state being called after unmount, then fix integration test
  componentDidMount() {
    this._isMounted = true;

      axios
      .get('/user', {
        maxContentLength: 1,
      })
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

      axios
      .get('/titles',  {
        maxContentLength: 2000,
      })
      .then(result => {
        if (this._isMounted) {
        let data = result.data.slice(1);
          this.setState({
            titles: data
          })
        }
       })
      .catch(err => { console.log('Error at GET: ', err); });
  }


  componentWillUnMount() {
    this._isMounted = false;
  }

  render() {
    const { userID, bmarks, titles } = this.state;
    return (
      <ErrorBoundary>
        <Main userID={userID} bmarks={bmarks} titles={titles}/>
      </ErrorBoundary>
    );
  }
};



export default App;

