import React, { useState, useRef, useEffect } from 'react';
import Main from './Main';
import Landing from './Landing';
import ErrorBoundary from './ErrorBoundary';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [ userID, setUserID ] = useState('');
  const [ groups, setGroups ] = useState([]);
  const [ links, setLinks ] = useState([]);
  const [ groupsID, setGroupsID ] = useState('');
  const countRetry = useRef(0);

  const updateGroups = (data) => {
    setGroups(data.groups);
    setGroupsID(data._id);
  };
  const updateLinks = data => setLinks(data);
  const updateUserID = data => setUserID(data.username);
  const updatePage = updatedData => setGroups(updatedData);

  const fetchRetry = (err, url, updateFunc) => {
    countRetry.current++;
    //fix error handle
    if (countRetry.current >= 3) { return err; }
    fetchData(url, updateFunc);
  };

  const fetchData = (url, updateFunc) => {
    axios.get(url)
      .then(res =>  {
        let data = res.data;
        updateFunc(data);
      })
      .catch(err => {
        fetchRetry(err);
      });
  };

  useEffect(() => {
    fetchData('/user', updateUserID);
    fetchData('/groups', updateGroups);
    fetchData('/titles', updateLinks);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing}></Route>
          <Route path='/app' render={() => <Main userID={userID} groups={groups} groupsID={groupsID} links={links} updatePage={updatePage} />}></Route>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
