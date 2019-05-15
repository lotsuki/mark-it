import React from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarCategories from './SidebarCategories.jsx';
import Dropdown from './Dropdown.jsx';

class Quicklinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
  }

  // showMenu(e) {
  //   e.preventDefault();

  //   this.setState({ showMenu: true }, () => {
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
        return data[i].sites.map((site, i) => (
          <a className="subject" href="#" key={i}>{site.title}</a>
        ));
      }
    }
  }

  render() {
    const { quicklinks } = this.props;
    return(
      <div className="quicklinksContainer">
        <SidebarHeader sidebarHeader="Quick links" />
        <SidebarCategories categories={quicklinks} />
        <Dropdown menu={this.filterCategories(quicklinks)}/>
      </div>
    );
  }
};

export default Quicklinks;
