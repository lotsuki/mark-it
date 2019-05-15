import React from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarCategories from './SidebarCategories.jsx';

class Quicklinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return(
      <div className="quicklinksContainer">
        <SidebarHeader sidebarHeader="Quick links" />
        <div className="categoryWrapper" onClick={this.showMenu}>
          <SidebarCategories categories={this.prop.quicklinks} />
        </div>

        {
          this.state.showMenu
            ? (
              <div className="quicklinks" className="menu"
              >
              {this.props.quicklinks.map((quicklink, i) => (
                 <a className="quicklink" href="#" key={i}>{quicklink.subject}</a>
              ))}
              </div>
            )
            : ( null )
        }
      </div>
    );
  }
};

export default Quicklinks;
