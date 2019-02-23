import React from 'react';


class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openPage = this.openPage.bind(this);
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

  openPage(e, site) { //TODO: doesn't work without e parameter, why?
    window.open(site.url)
  }

  render() {
    return (
      <div className="dropdownWrapper" key={this.props.subject}>
        <div className="dropbtn" onClick={this.showMenu}>
          {this.props.subject}
          <span className="caret" className="caret"></span>
        </div>
        {
          this.state.showMenu
            ? (
              <div className="dropdownContentWrapper" className="menu"
              >
              {this.props.sites.map(site => (
                 <button className="dropdownContent" key={site.url} onClick={e => this.openPage(e, site)}> {site.title} </button>
              ))}
              </div>
            )
            : ( null )
        }
      </div>
    );
  }
}


export default Dropdown;

