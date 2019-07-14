import React, { Fragment } from 'react';
import IconFolder from './IconFolder';

const CategoryChild = ({ cat, color, folderOpen }) => {
  let style = folderOpen ? {background: "#ECECEE"} : {background: ""};

  //returns section of category row
  return (
    <Fragment>
      <IconFolder viewBox={"-20 -9 55 55"} color={color} width={"30"} height={"30"} folderOpen={folderOpen}/>
      <div className="category-text">{cat}</div>
    </Fragment>
  )
};

export default CategoryChild;