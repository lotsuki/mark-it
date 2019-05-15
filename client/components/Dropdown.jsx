import React from 'react';
import PropTypes from 'prop-types';

//TODO: get onclick to show menu

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      category: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openPage = this.openPage.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    console.log('hi')
    console.log(e)

    this.setState(
      {
        showMenu: true,
        category: e.target.innerText
      },
      () => { document.addEventListener('click', this.closeMenu);
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
    console.log(this.props.menu, 'menu')
    console.log(this.props.currentTarget, 'CT')
    return (
      <div className="dropdownContainer">
        {
          this.state.showMenu
            ? (
              <div className="dropdownContentWrapper" className="menu"
              >
              {this.props.menu}
              </div>
            )
            : ( null )
        }
      </div>
    );
  }
}


export default Dropdown;

Dropdown.propTypes = {
  menu: PropTypes.array,
  currentTarget: PropTypes.object
}
Dropdown.defaultProps = {
  menu: [],
  currentTarget: {}
}

