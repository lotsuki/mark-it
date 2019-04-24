import React from 'react';


class Xdropdown extends React.Component {
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
      <div className="xdropdownWrapper">
        <div className="xdropbtn" onClick={this.showMenu}>
          {this.props.subject}
          <span className="caret"></span>
        </div>
        {
          this.state.showMenu
            ? (
              <div className="xdropdownContentWrapper" className="xmenu"
              >
              {this.props.sites.map((site, i) => (
                 <div className="xdropdownContent" key={i} onClick={e => this.openPage(e, site)}> {site.title} </div>
              ))}
              </div>
            )
            : ( null )
        }
      </div>
    );
  }
}


export default Xdropdown;
