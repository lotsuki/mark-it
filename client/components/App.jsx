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
      bmarks: [],
      titles: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get('/user')
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
      .get('/titles')
      .then(result => {
        if (this._isMounted) {
          this.setState({
            titles: result.data
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
        <Sidebar userID={userID} bmarks={bmarks} titles={titles}/>
      </ErrorBoundary>
    );
  }
};


export default App;

