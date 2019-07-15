import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Landing from './Landing';
import ErrorBoundary from './ErrorBoundary';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      groups: [],
      links: [],
      groupsID: '',
      countUser: 0,
      countGroups: 0,
      countTitles: 0
    }
    this._isMounted = false;
    this.updatePage = this.updatePage.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.fetchGroups = this.fetchGroups.bind(this);
    this.fetchTitles = this.fetchTitles.bind(this);
    this.fetchUserRetry = this.fetchUserRetry.bind(this);
    this.fetchGroupsRetry = this.fetchGroupsRetry.bind(this);
    this.fetchTitlesRetry = this.fetchTitlesRetry.bind(this);
  }

  //fetch user object
  fetchUser() {
    axios.get('/user')
      .then(res =>  {
        let data = res.data;
        this.setState({
          userID: data.username
        })
      })
      .catch(err => {
        this.fetchUserRetry(err);
      });
  }

  //fetch groups array
  fetchGroups() {
    axios.get('/groups')
      .then(res =>  {
        let data = res.data;
        this.setState({
          groups: data.groups,
          groupsID: data._id
        })
      })
      .catch(err => {
        this.fetchGroupsRetry(err);
      });
  }

  //fetch titles array
  fetchTitles() {
    axios.get('/titles')
      .then(res =>  {
        let data = res.data;
        this.setState({
          links: data
        })
      })
      .catch(err => {
        this.fetchTitlesRetry(err);
      });
  }

  //handles error on user fetch
  fetchUserRetry(err) {
    this.setState(prevState => ({countUser: prevState.countUser + 1}));
    if (this.state.countUser >= 3) { return err; }
    this.fetchUser();
  }

  //handles error on groups fetch
  fetchGroupsRetry(err) {
    this.setState(prevState => ({countGroups: prevState.countGroups + 1}));
    if (this.state.countGroups >= 3) { return err; }
    this.fetchGroups();
  }

  //handles error on titles fetch
  fetchTitlesRetry(err) {
    this.setState(prevState => ({countTitles: prevState.countTitles + 1}));
    if (this.state.countTitles >= 3) { return err; }
    this.fetchTitles();
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchUser()
    this.fetchGroups();
    this.fetchTitles();
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  updatePage(updatedData) {
    this.setState({ groups: updatedData});
  }

  render() {
    const { userID, groups, groupsID, links } = this.state;
    const { updatePage } = this;
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Landing}></Route>
            <Route path='/app' render={props => <Main userID={userID} groups={groups} groupsID={groupsID} links={links} updatePage={updatePage} />}></Route>
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
};



export default App;
