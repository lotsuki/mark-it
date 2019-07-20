import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import IconFolder from './IconFolder';
import CategoriesContext from './CategoriesContext';

const CategoryChild = ({ cat, color, folderOpen }) => {
  const { categoryText } = useContext(CategoriesContext);
  //returns section of category row
  return (
    <Fragment>
      <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} folderOpen={folderOpen}/>
      <div className="category-text" ref={categoryText}>{cat}</div>
    </Fragment>
  )
};

export default CategoryChild;

CategoryChild.propTypes = {
  cat: PropTypes.string,
  color: PropTypes.string,
  folderOpen: PropTypes.bool
};

CategoryChild.defaultProps = {
  cat: '',
  color: '',
  folderOpen: false
};