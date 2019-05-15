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

  filterCategories(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].category === this.state.category) {
        if (data[i].quicklink) {
          return data[i].sites.map((site, i) => (
             <a className="subject" href="#" key={i}>{site.title}</a>
          ));
        } else {
          return data[i].subjects.map((subject, i) => (
             <a className="subject" href="#" key={i}>{subject.subject}</a>
          ))
        }
      }
    }
  }

  render() {
    //let sites = filterCategories(this.props.menu);
    return (
      <div className="dropdownContainer" onClick={(e) => this.showMenu}>
        {
          this.state.showMenu
            ? (
              <div className="dropdownContentWrapper" className="menu"
              >
              {filterCategories(this.props.menu)}
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
  menu: PropTypes.array
}
Dropdown.defaultProps = {
  menu: []
}

