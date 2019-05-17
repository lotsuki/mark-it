import React from 'react';
import PropTypes from 'prop-types';
import App from './App.jsx';
import FormInputs from './FormInputs.jsx';
import axios from 'axios';
import moment from 'moment';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      category: '',
      subject: '',
      title: '',
      url: '',
      starred: false,
      favorites: false,
    };
    this.titleChange = this.titleChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.subjectChange = this.subjectChange.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }
  urlChange(e) {
    this.setState({ url: e.target.value })
  }

  subjectChange(e) {
    this.setState({ subject: e.target.value })
  }

  setCategory(e) {
    this.setState({ category: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this._isMounted = true;
    var data = {
      category: this.state.category,
      subject: this.state.subject,
      title: this.state.title,
      url: this.state.url,
      date: moment().format('MM-DD-YYYY'),
      starred: this.state.starred,
      favorites: this.state.favorites
    };

  console.log(data, 'DATAAAAAAA')
    axios
      .post('/', data)
      .then(result => {
        this.setState({
          data: result.data
        })
        this.props.updateStateAfterPostReq(result.data);
      })
      .catch(err => { console.log('Could not post document', err); });
  }


  render() {
    const { titleChange, subjectChange, urlChange, handleSubmit, setCategory} = this;
    return(
      <FormInputs setCategory={setCategory} titleChange={titleChange} subjectChange={subjectChange} urlChange={urlChange} handleSubmit={handleSubmit}/>
    );
  }
};


export default Form;



Form.propTypes = {
  updateStateAfterPostReq: PropTypes.func
};


