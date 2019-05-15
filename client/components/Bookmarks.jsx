import React from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarCategories from './SidebarCategories.jsx';

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
        <div className="categoryWrapper" onClick={this.showMenu}>
          <SidebarCategories categories={this.prop.bookmarks} />
        </div>
        {
          this.state.showMenu
            ? (
              <div className="bookmarks" className="menu"
              >
              {this.state.data.category.subjects.map((bookmark, i) => (
                 <a className="subject" href="#" key={i}>{bookmark.subject}</a>
              ))}
              </div>
            )
            : ( null )
        }
      </div>
    );
  }
};


export default Bookmarks;