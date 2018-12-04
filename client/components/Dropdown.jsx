import React from 'react';
import style from '../style.css.js';


class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      listOpen: false,
      siteTitle: this.props.title
    }
    this.toggleList = this.toggleList.bind(this);
  }


  toggleList() {
    console.log('toggle')
    this.setState({
      listOpen: !this.state.listOpen
    })
  }


  render() {
    if (this.state.listOpen) {
      return (
      <div style={style.boardButtons} className="dropdown" >
        <button style={style.dropdown} className="dropdown" onClick={this.toggleList} type="button" data-toggle="dropdown">{this.props.subject}
        <span className="caret"></span></button>
        <div style={style.dropdownContent}>
          {this.props.sites.map(site => (
            <a key={site.url} href="#">{site.url}</a>
          ))}
         </div>
      </div>
      )
    } else {
    return (
       <div style={style.boardButtons} className="dropdown" >
        <button style={style.dropdown} className="dropdown" onClick={this.toggleList} type="button" data-toggle="dropdown">{this.props.subject}
        <span className="caret"></span></button>
      </div>
    )
   }
  }
};


export default Dropdown;

