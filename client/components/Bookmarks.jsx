import React from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarCategories from './SidebarCategories.jsx';
import Dropdown from './Dropdown.jsx';

//TODO:
  //make bookmarks categories dynamic by creating state prop: data
  //clean up render

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      category: ''
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();

    this.setState({
      showMenu: true,
      category: e.target.innerText
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const { category } = this.state;
    return(
      <div className="bookmarksContainer">
        <SidebarHeader sidebarHeader="My Bookmarks"/>
        <SidebarCategories categories={this.props.bookmarks} />
        <Dropdown menu={this.props.bookmarks}/>
      </div>
    );
  }
};


export default Bookmarks;