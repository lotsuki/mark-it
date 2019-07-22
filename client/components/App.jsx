import React, { useState, useRef, useEffect } from 'react';
import Main from './Main';
import Landing from './Landing';
import ErrorBoundary from './ErrorBoundary';
import LoginForm from './LoginForm';
import Signup from './Signup';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      username: '',
      userID: ''
    }
    this._isMounted = false;
    this.fetchUser = this.fetchUser.bind(this);
  }

  //fetch user object
  fetchUser() {
    axios.get('/user')
      .then(res =>  {
        let data = res.data;
        if (data.username) {
          this.setState({
            userID: data._id,
            username: data.username,
            isLoggedIn: true
          })
        }
      })
      .catch(err => {
        //fix handle error
        console.log('cant get user: ', err);
        // this.fetchUser();
      });
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchUser();
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  render() {
    const { isLoggedIn, username, userID } = this.state;

    if (isLoggedIn) {
      return (
        <ErrorBoundary>
          <Main
            userID={userID}
          />
        </ErrorBoundary>
      );
    } else {
      return (
        <ErrorBoundary>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                exact component={Landing}
              />
              <Route
                path="/login"
                render={() =>
                <LoginForm
                  updateUser={this.updateUser}
                />}
              />
              <Route
                path="/signup"
                render={() =>
                <Signup
                  updateUser={this.updateUser}
                />}
              />
              <Route
                path='/app'
                render={() =>
                  <Main
                    userID={userID}
                  />}
              />
            </Switch>
          </BrowserRouter>
        </ErrorBoundary>
      );
    }
  }
}

export default App;