import React from 'react';
import style from '../style.css.js';


class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subject: '',
      titles: [],
      urls: []
    }
  }

  componentDidMount() {
    fetch('/subject')
    .then(res => res.json())
    .then(data => {
      this.setState({
        titles: data,
        urls: data
      })
    })
    .catch(err => { console.log('Could not get sites', err); })

    //TODO: fix state props
  }

  render() {
    return (
      <div style={style.boardButtons} className="dropdown">
        <button style={style.dropdown} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.subject}
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li><a href="#">hi</a></li>
          <li><a href="#">HTML</a></li>
        </ul>
      </div>
    )
  }
};


export default Dropdown;