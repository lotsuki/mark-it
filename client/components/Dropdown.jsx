import React from 'react';
import style from '../style.css.js';


class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

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
    return (
      <div style={style.dropdownWrapper} key={this.props.subject}>
        <button style={style.dropbtn} onClick={this.showMenu}>
          {this.props.subject}
          <span style={style.caret} className="caret"></span>
        </button>

        {
          this.state.showMenu
            ? (
              <div style={style.dropdownContentWrapper} className="menu">
              {this.props.sites.map(site => (
                 <button style={style.dropdownContent}> {site.title} </button>
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

