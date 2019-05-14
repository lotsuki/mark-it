import React from 'react';

//TODO:
  //make bookmarks categories dynamic by creating state prop: data

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
    console.log(this.props)
    const { category } = this.state;
    return(
      <div className="bookmarksContainer">
        <div className="bookmarksHeaderWrapper">
          <div className="bookmarksHeader" >My Bookmarks
          </div>
          <div className="addBookmark">+</div>
        </div>
        <div className="categoryWrapper" onClick={this.showMenu}>
          <div className="category">Food</div>
          <div className="category">Travel</div>
          <div className="category">Tech</div>
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