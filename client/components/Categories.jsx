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
         {sidebarSection.map((category, i) => {
           for (var key in category[i]) {
             return
               <div className="categoryWrapper">
                 <div className="category" key={key}>{key}</div>
                 <Dropdown sidebarSection={sidebarSection} category={category}/>
               </div>
            }
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

