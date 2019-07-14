import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import ErrorBoundary from './ErrorBoundary';
import axios from 'axios';

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
    this.fetchUserRetry = this.fetchUserRetry.bind(this);
    this.fetchGroupsRetry = this.fetchGroupsRetry.bind(this);
    this.fetchTitlesRetry = this.fetchTitlesRetry.bind(this);
  }

  fetchUserRetry(err) {
    this.setState(prevState => ({countUser: prevState.countUser + 1}));
    if (this.state.countUser >= 3) { return err; }

    axios.get('/user')
      .then(res =>  {
        let data = res.data;
        this.setState({
          userID: data.username
        })
      })
      .catch(err => {
        fetchUserRetry(err);
      });
  }

  fetchGroupsRetry(err) {
    this.setState(prevState => ({countGroups: prevState.countGroups + 1}));
    if (this.state.countGroups >= 3) { return err; }

    axios.get('/groups')
      .then(res =>  {
        let data = res.data;
        this.setState({
          groups: data.groups,
          groupsID: data._id
        })
      })
      .catch(err => {
        fetchGroupsRetry(err);
      });
  }

  fetchTitlesRetry(err) {
    this.setState(prevState => ({countTitles: prevState.countTitles + 1}));
    if (this.state.countTitles >= 3) { return err; }


    axios.get('/titles')
      .then(res =>  {
        let data = res.data;
        this.setState({
          links: data
        })
      })
      .catch(err => {
        fetchTitlesRetry(err);
      });
  }

  componentDidMount() {
    this._isMounted = true;

    axios.get('/user')
      .then(res =>  {
        let data = res.data;
        this.setState({
          userID: data.username
        })
      })
      .catch(err => {
        fetchUserRetry(err);
      });

    axios.get('/groups')
      .then(res =>  {
        let data = res.data;
        this.setState({
          groups: data.groups,
          groupsID: data._id
        })
      })
      .catch(err => {
        fetchGroupsRetry(err);
      });

    axios.get('/titles')
      .then(res =>  {
        let data = res.data;
        this.setState({
          links: data
        })
      })
      .catch(err => {
        fetchTitlesRetry(err);
      });
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
        <Main userID={userID} groups={groups} groupsID={groupsID} links={links} updatePage={updatePage}/>
      </ErrorBoundary>
    );
  }
};



export default App;
