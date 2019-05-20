import React from 'react';
import PropTypes from 'prop-types';
import Subjects from './Subjects.jsx';


const Dropdown = ({ sidebarSection, category }) => {

  const closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  return (
    <div className="dropdownContainer">
      {
        category
          ? ( <Subjects sidebarSection={sidebarSection} category={category} />)
          : ( null )
      }
    </div>
  );
};


export default Dropdown;

Dropdown.propTypes = {
  sidebarSection: PropTypes.array,
  category: PropTypes.string
};

Dropdown.defaultProps = {
  sidebarSection: [],
  category: ''
};

