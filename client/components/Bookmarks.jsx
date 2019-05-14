import React from 'react';

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
          <div className="bookmarksHeader" onClick={this.showMenu}>My Bookmarks
          </div>
          <div className="addBookmark">+</div>
        </div>
        <div className="categoryWrapper">
          <div className="category">Food</div>
          <div className="category">Travel</div>
          <div className="category">Tech</div>
        </div>
        {
          this.state.showMenu
            ? (
              <div className="bookmarks" className="menu"
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