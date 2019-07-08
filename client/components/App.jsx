import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
//import Landing from './Landing.jsx';
import ErrorBoundary from './ErrorBoundary';

//TODO: transition elements, fix form when click twice, delete api not wokring for categories and subjects (elementForCustomMenu is not defined), oauth

//TODO later: get rid of title apis, try to decrease renders
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      groups: [],
      links: [],
      groupsID: ''
    }
    this._isMounted = false;
  }

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
          userID: data.username
        })
      })
      .catch(err => {
        console.log('GET request failed at /user: ', err)
      });

      fetch('/groups', {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, no-cache"
          }
        })
        .then(res => res.json())
        .then(data =>  {
          this.setState({
           groups: data.groups,
           groupsID: data._id
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
    const { userID, groups, groupsID, links } = this.state;
    return (
      <ErrorBoundary>
        <Main userID={userID} groups={groups} groupsID={groupsID} links={links}/>
      </ErrorBoundary>
    );
  }
};



export default App;

// <Landing />