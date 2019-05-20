import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown.jsx';

const Categories = ({ sidebarSection }) => {
  const [ category, setCategory ] = useState('');

  const handleClick = (e) => {
    setCategory(e.target.innerText);
  };

  return (
    <div className="sectionContainer" >
       <div className="section" onClick={handleClick}>
         {sidebarSection.map(obj => {
           let cat = Object.keys(obj)[0];
           return (
             <div className="categoryWrapper" key={cat}>
               <div className="category" key={cat}>{cat}</div>
               {
                category === cat
                ? (
                  <Dropdown sidebarSection={sidebarSection} category={category}/>
                )
                : ( null )
               }
             </div>
           );
          })}
      </div>
    </div>
  );
};


export default Categories;

Categories.propTypes = {
  sidebarSection: PropTypes.array
};

Categories.defaultProps = {
  sidebarSection: []
};

