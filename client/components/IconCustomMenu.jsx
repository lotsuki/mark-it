import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import ContentContext from './ContentContext';
import CategoriesContext from './CategoriesContext';
import utils from '../lib/utils';

const IconCustomMenu = ({ name }) => {
  const [ iconClicked, setIconClicked ] = useState(null);
  const { groups, elementForCustomMenu, setCords, setElementForCustomMenu, setCategoryID, setSubjectToDelete } = useContext(ContentContext);
  const { categoryText } = useContext(CategoriesContext);
  const iconMenu = useRef(null);

  //handle icon custom menu click
  const openCustomMenu = () => {
    //TODO: STORE TARGET, CATEGORY OR SUBJECT (SEND TO CONTENT)
    const target = iconMenu.current;
    //find coordinates of icon clicked to position custom menu
    const group = utils.whichGroup(groups, target);
    const rect = target.getBoundingClientRect();
    const cords = [rect.top + 8, rect.left];
    //hide cusotm menu icon
    // if (elementForCustomMenu) {
    //   elementForCustomMenu.style.visibility = '';
    // }
    console.log(iconClicked, 'previosu icon');
    console.log(target, 'curr target');
    console.log
    if (iconClicked) { iconClicked.style.visibility = ''; }
    //open custom menu
    if (group === 'category') {
      //set categoryID
      const cat = target.parentElement.children[1].innerText;
      const id = utils.findCategoryID(groups, cat);
      if (id >= 0) { setCategoryID(id); }
    } else if (group === 'subject') {
      //set subject to delete
      const subject = target.parentElement.children[1].innerText;
      setSubjectToDelete(subject);
    }
    //display custom menu
    target.style.visibility = 'visible';
    setCords(cords);
    setElementForCustomMenu(target);
  };

  return (
    <svg className= {`icon-custom-menu ${name}`} ref={iconMenu} onClick={openCustomMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="52"viewBox="0 0 40 40" fill="gray" pointerEvents= 'none' style={{pointerEvents: 'all'}}>
      <path d="M 16 6 C 14.894531 6 14 6.894531 14 8 C 14 9.105469 14.894531 10 16 10 C 17.105469 10 18 9.105469 18 8 C 18 6.894531 17.105469 6 16 6 Z M 16 14 C 14.894531 14 14 14.894531 14 16 C 14 17.105469 14.894531 18 16 18 C 17.105469 18 18 17.105469 18 16 C 18 14.894531 17.105469 14 16 14 Z M 16 22 C 14.894531 22 14 22.894531 14 24 C 14 25.105469 14.894531 26 16 26 C 17.105469 26 18 25.105469 18 24 C 18 22.894531 17.105469 22 16 22 Z "></path>
    </svg>
  );
}

export default IconCustomMenu;

IconCustomMenu.propTypes = {
  name: PropTypes.string,
};

IconCustomMenu.defaultProps = {
  name: '',
};