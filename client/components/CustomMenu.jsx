import React, { useEffect } from 'react';

const CustomMenu = ({ top, elementForCustomMenu, setElementForCustomMenu, isEditing, setIsEditing }) => {
  useEffect(() => {
    document.addEventListener('click', exitCustomMenu);
  }, [])


  //use useeffect to add event listener and return a clean up func
  //use memo for component caching/memoization
  const exitCustomMenu = (e) => {
    console.log('hi')
    let target;
    if (e.target.id !== 'edit category' && e.target.className === 'app' || e.target.className === 'sidebar-container') {
      let menuIcons = document.getElementsByClassName('icon-custom-menu');
      for (var i = 0; i < menuIcons.length; i++) {
        menuIcons[i].style.visibility = '';
      }
      setIsEditing(false);
      setElementForCustomMenu('');
      document.removeEventListener('click', exitCustomMenu);
    }
    if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      target = e.target.parentElement;
    } else if (e.target.className.baseVal && e.target.className.baseVal.includes('icon-custom-menu')) { target = e.target }
    if (target && target.parentElement.parentElement.className !== 'custom-menu' && e.target.className.baseVal && !target.className.baseVal.includes('icon-custom-menu')) {
      elementForCustomMenu.style.visibility = '';
      setIsEditing(false);
      setElementForCustomMenu('');
      document.removeEventListener('click', exitCustomMenu);

    }
  };
  //document.addEventListener('click', exitCustomMenu);

  const customMenuClick = (e) => {
    if (e.target.innerText === 'Edit Item') {
      setIsEditing(true);
    } else if (e.target.innerText === 'Delete Item') {
      //show confirmation box
    }
  };

  return (
    <div className="custom-menu" onClick={customMenuClick} style={{left: '378px', top:`${top}px`}}>
      <div  className="custom-menu-edit">
        <span className="custom-menu-text">Edit Item</span>
        <svg className="edit-item" xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="-10 -15 60 60" fill="#4a51d6" style={{cursor: "pointer"}}>
          <title>pencil</title>
          <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
        </svg>
      </div>
      <div className = "custom-menu-delete">
        <span className="custom-menu-text">Delete Item</span>
        <svg className="delete-item" width="25" height="30" viewBox="-200 -200 800 800"  xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>
      </div>
    </div>
  )
}

export default CustomMenu;