import React from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarCategories from './SidebarCategories.jsx';
import Dropdown from './Dropdown.jsx';
import helpers from '../lib/helpers.js';

//TODO:
  //make bookmarks categories dynamic by creating state prop: data
  //clean up render

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      category: 'Tech',
      target: null
    }
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
    this.getCurrentTarget = this.getCurrentTarget.bind(this);
  }

  // showMenu(e) {
  //   e.preventDefault();

  //   this.setState({
  //     showMenu: true,
  //     category: e.target.innerText
  //   }, () => {
  //     document.addEventListener('click', this.closeMenu);
  //   });
  // }

  // closeMenu() {
  //   this.setState({ showMenu: false }, () => {
  //     document.removeEventListener('click', this.closeMenu);
  //   });
  // }

  filterCategories(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].category === this.state.category) {
        return data[i].subjects.map((subject, i) => (
           <a className="subject" href="#" key={i}>{subject.subject}</a>
        ))
      }
    }
  }

  getCurrentTarget(target) {
    console.log(target)
    this.setState({ target })
  }

  render() {

    const { bookmarks } = this.props;
    return(
      <div className="bookmarksContainer">
        <SidebarHeader sidebarHeader="My Bookmarks"/>
        <SidebarCategories categories={bookmarks} showMenu={e => this.getCurrentTarget(e.target)}/>
        <Dropdown menu={this.filterCategories(bookmarks)} currentTarget={this.state.target}/>
      </div>
    );
  }
};


export default Bookmarks;