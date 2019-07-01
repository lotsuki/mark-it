import React from 'react';

const CustomMenu = ({ left, top }) => {
  return (
    <ul className="custom-menu" style={{left: '377px', top:`${top - 26}px`}}>
      <li>Edit Item</li>
      <li>Delete Item</li>
    </ul>
  )
}

export default CustomMenu;