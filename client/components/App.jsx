import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import moment from 'moment';
import Subjects from './Subjects.jsx';


class App extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.state = {
      title: '',
      url: '',
      subject: '',
      subjectToAdd: '',
      subjects: [],
      docs: []
    };
    this.titleChange = this.titleChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.subjectToAddChange = this.subjectToAddChange.bind(this);
    this.subjectChange = this.subjectChange.bind(this);
    this.addSubject = this.addSubject.bind(this);

  }

  componentDidMount() {
    fetch ('/docs')
    .then(res => { return res.json() })
    .then(data => { this.setState({
      docs: data
    })})
    .catch(err => { console.log('Error at GET', err) })
  }

  // getValidationStateTitle() {
  //   const length = this.state.title.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  //   return null;
  // }

  //  getValidationStateUrl() {
  //   const length = this.state.url.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  //   return null;
  // }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }

  urlChange(e) {
    this.setState({ url: e.target.value })
  }
  subjectToAddChange(e) {
    this.setState({ subjectToAdd: e.target.value})
  }
  subjectChange(e) {
    this.setState({ subject: e.target.value})
  }
  addSubject(e) {
    e.preventDefault();
    this.setState({
      subjects: [...this.state.subjects, this.state.subjectToAdd]
    })
  }


  handleSubmit() {
    var data = {
      title: this.state.title,
      url: this.state.url,
      subject: this.state.subject,
      date: moment().format('MM-DD-YYYY')
    }
    fetch('/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( res => res.json() )
    .then( data => this.setState({
      docs: data
    }))
    .catch(err => { console.log('Could not post document', err); })
  }

  render() {
    console.log(this.state.subjects)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label>Title</label>
            </div>
            <input type="text" placeholder="Enter text" value={this.state.title} onChange={this.titleChange} />
          </div>
          <div>
            <div>
              <label>Site URL</label>
            </div>
            <input type="text" placeholder="Enter URL" value={this.state.url} onChange={this.urlChange} />
          </div>
          <div>
            <Subjects subjects={this.state.subjects} handleChange={this.subjectChange}/>
          </div>
          <div>
            <div>
              <label>Add Subject</label>
            </div>
            <input type="text" placeholder="Enter subject" value={this.state.subjectToAdd} onChange={this.subjectToAddChange} />
            <input type="submit" value="Add" onClick={this.addSubject}/>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
};

export default App;