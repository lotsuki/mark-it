import React from 'react';
import PropTypes from 'prop-types';
import utils from '../lib/utils.js';

//TESTS
  //test logic iwth this.showmenu ternary operator
  //check if this.props.data is an array and has a length > 1
  //check if this.props.data.category === strings
  //div.dropbtn has click event that invokes this.showmenu
  //when click event, dom changes, renders new elements
  //this.showmenu invokes displaycontent


//take in an array of strings, print out dropdown menu of stirngs


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
    this.setState({ showMenu: true, category: e.target.innerText }, () => { document.addEventListener('click', this.closeMenu);
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
    const { data } = this.props;
    return (
      <div className="categoryWrapper" >
        <div className="dropbtn" onClick={this.showMenu}>
          {this.props.data.map(category => (
            <div className="category" key={category.category}>{category.category}
            {
            this.state.showMenu && this.state.category === category.category
              ? (
                <div className="dropdownContentWrapper" >
                {utils.displayContent(data, 'Tech').map((subject, i) => (
                  <a className="dropdownContent" href="#" key={subject[i]}> {subject} </a>
                  ))}
                </div>
              )
            : ( null )
           }
            </div>

          ))}
        </div>


      </div>
    );
  }
};

//   return (
//     <div className="dropdownContainer">
//       {
//       this.state.showMenu
//         ? (
//             <div className="dropdownContentWrapper" >
//             {utils.displayContent(data, 'Tech').map((subject, i) => (
//               <a className="dropdownContent" href="#" key={subject[i]}> {subject} </a>
//               ))}
//             </div>
//           )
//         : ( null )
//       }
//     </div>
//   );
// };


export default Dropdown;

Dropdown.propTypes = {
  data: PropTypes.array
};

Dropdown.defaultProps = {
  data: []
};

