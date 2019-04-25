import React from 'react';
// import Dropdown from './Dropdown.jsx';

// const Bookmarks = ({data, openDropdown}) => (
//   <div className="bookmarksContainer">
//     <div className="bookmarksHeaderWrapper">
//       <div className="bookmarksHeader">My Bookmarks</div>
//       <div className="addBookmark">+</div>
//     </div>
//     <div className="subjectContainer" onClick={openDropdown}>
//       {data.map((site, i) => (
//         <Dropdown  key={i} subject={site.subject} sites={site.sites} />
//       ))}
//     </div>
//   </div>
// );

//

class Bookmarks extends React.Component {
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
      <div className="bookmarksContainer">
        <div className="bookmarksHeaderWrapper">
          <div className="bookmarksHeader">My Bookmarks</div>
          <div className="addBookmark">+</div>
        </div>
        {
          this.state.showMenu
            ? (
              <div className="dropdownContentWrapper" className="menu"
              >
              {this.props.bookmarks.map((bookmark, i) => (
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