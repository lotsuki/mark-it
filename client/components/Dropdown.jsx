import React from 'react';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
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

  openPage(e, site) {
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
              {this.props.sites.map((site, i) => (
                 <button className="dropdownContent" key={i} onClick={e => this.openPage(e, site)}> {site.title} </button>
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

