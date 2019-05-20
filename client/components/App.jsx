import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from 'Sidebar.jsx';


export default class App extends React.Component {
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
        console.log(result, 'RESULT')
        if (this._isMounted) {
          this.setState({
            userID: result.data.userID,
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
    const [ userID, qlinks, bmarks ] = this.state;
    return (
      <Sidebar userID={userID}, qlinks={qlinks}, bmarks={bmarks}/>
    );
  }
}








  // subjectToAddChange(e) {
  //   this.setState({ subjectToAdd: e.target.value })
  // }

  // addSubject(e) {
  //   e.preventDefault();
  //   var storage = this.state.subjects;

  //   storage.push(this.state.subjectToAdd);
  //   localStorage.setItem('subjects', JSON.stringify(storage));

  //   this.setState({
  //     subjects: storage
  //   })
  //   location.reload();
  // }

  // deleteSubject(e) {
  //   //TODO: refactor, minify
  //   e.preventDefault();
  //   var storage = localStorage.getItem('subjects');
  //   var parsed = JSON.parse(storage);
  //   var subject = this.state.subjectToAdd;

  //   fetch(`/subject/${subject}`, {
  //     method: 'delete',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(result => {
  //     console.log(result, 'RESULT')
  //   })

  //   new Promise((resolve, reject) => {
  //     resolve('ok')
  //   })
  //   .then(() => {
  //     for (var i = 0; i < parsed.length; i++) {
  //       if (subject === parsed[i]) {
  //         parsed.splice(i, 1);
  //       }
  //     }
  //       return parsed;
  //   })
  //   .then(result => {
  //     console.log(result, 'deleted')
  //     localStorage.setItem('subjects', JSON.stringify(result));
  //     this.setState({
  //       subjects: result
  //     })
  //   })
  //   .catch(err => { console.log('Cannot delete subject', err) })

  //   location.reload();
  // }

