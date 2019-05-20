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
      qlinks: [],
      bmarks: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get('/docs')
      .then(result => {
        if (this._isMounted) {
          this.setState({
            userID: result.data.username,
            qlinks: result.data.qlinks,
            bmarks: result.data.bmarks
          })
         }
       })
      .catch(err => { console.log('Error at GET', err); });
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  render() {
    const { userID, qlinks, bmarks } = this.state;
    return (
      <ErrorBoundary>
        <Sidebar userID={userID} qlinks={qlinks} bmarks={bmarks} />
      </ErrorBoundary>
    );
  }
};


export default App;

