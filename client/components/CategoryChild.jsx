import React, { useContext, Fragment } from 'react';
import CategoriesContext from './CategoriesContext';
import IconFolder from './IconFolder';
import IconCustomMenu from './IconCustomMenu';

const CategoryChild = ({ cat, color }) => {
  const { isOpen } = useContext(CategoriesContext);
  let style = isOpen ? 'background = #ECECEE' : 'background = #fff';

  return (
    <Fragment>
      <div className="category" key={cat} style={{style}}>
        <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} isOpen={isOpen}/>
        <div className="category-text">{cat}</div>
        <IconCustomMenu name={cat}/>
      </div>
    </Fragment>
  )
};

export default CategoryChild;