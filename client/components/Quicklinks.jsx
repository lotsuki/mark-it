import React from 'react';

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
        <div className="quicklinksHeaderWrapper">
          <div className="quicklinksHeader" onClick={this.showMenu}>Quick links</div>
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
