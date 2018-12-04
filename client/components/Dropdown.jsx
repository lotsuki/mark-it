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
  }

  // componentDidMount() {
  //   fetch('/subject')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       data: data
  //     })
  //   })
  //   .catch(err => { console.log('Could not get sites', err); })
  //   //TODO: fix state props
  // }

  // toggleList() {
  //   this.setState(prevState => ({
  //     listOpen: !prevState.listOpen
  //   }))
  // }



  render() {
    return (
      <div style={style.boardButtons} className="dropdown" onClick={() => this.toggleList()}>
        <button style={style.dropdown} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.subject}
        <span className="caret"></span></button>
        <ul className="dropdown-menu">

        </ul>
      </div>
    )
  }
};


export default Dropdown;

  // {this.props.sites.map(site => {
        //   <li><div>{site.title}</div><a href="#">{site.url}</a></li>
        // })}