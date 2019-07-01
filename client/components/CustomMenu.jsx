import React from 'react';

const CustomMenu = ({ left, top, setCords }) => {
  const exitCustomMenu = (e) => {
    if (e.target.parentElement.className !== 'custom-menu' &&
      e.target.className.baseVal !== 'icon-custom-menu') {
      setCords([]);
      document.removeEventListener('click', exitCustomMenu);
    }
  };
  document.addEventListener('click', exitCustomMenu);
  return (
    <ul className="custom-menu" style={{left: '385px', top:`${top - 26}px`}}>
      <li>Edit Item</li>
      <li>Delete Item</li>
    </ul>
  )
}

export default CustomMenu;