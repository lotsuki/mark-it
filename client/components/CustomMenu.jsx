import React, { useEffect, useContext } from 'react';
import IconEdit from './IconEdit';
import IconDelete from './IconDelete';
import ContentContext from './ContentContext';
import utils from '../lib/utils';

const CustomMenu = () => {
  const { groups, cords, setCords, elementForCustomMenu, setElementForCustomMenu, setIsEditing, showConfirm, setShowConfirm, setIsEditingSubject } = useContext(ContentContext);

  console.log(groups, cords, elementForCustomMenu, showConfirm, 'CUSTOM MENU');

  useEffect(() => {
    document.addEventListener('click', exitCustomMenu);
  }, [])

  //use useeffect to add event listener and return a clean up func

  const exitCustomMenu = (e) => {
    console.log('CUSTOM MENU exitCustomMenu');
    let customMenuIcon = utils.findCustomMenuIcon(e.target);
    if(customMenuIcon && customMenuIcon.className.baseVal !== elementForCustomMenu.className.baseVal) {
      console.log('KEEP CUSTOM MENU');
      return;
    } else {
      let menuIcons = document.getElementsByClassName('icon-custom-menu');
      for (var i = 0; i < menuIcons.length; i++) {
        menuIcons[i].style.visibility = '';
      }
      console.log('EXIT CUSTOM MENU');
      setIsEditing(false);
      setElementForCustomMenu('');
      document.removeEventListener('click', exitCustomMenu);
    }
  };

  const confirmDeleteForGroup = (e) => {
    console.log('CUSTOM MENU confirmDeleteForGroup func');
    let doc = document.getElementById('container');
    let confirmContainer = document.getElementById('confirm');

    if (!showConfirm) {
      setShowConfirm(true);
      setElementForCustomMenu(e.target);
      if (confirmContainer) {
        confirmContainer.className = 'confirm-container is-visuallyHid';
        doc.className = 'MainContainer is-blurred';
        confirmContainer.className = 'confirm-container';
        doc.parentElement.className = 'ModalOpen';
      }
    } else {
      doc.parentElement.className = '';
      doc.className = '';
      confirmContainer.className = 'confirm-container is-hidden is-visuallyHid';
      setShowConfirm(false)
    }
  };

  const customMenuClick = (e) => {
    console.log(e.target, 'CUSTOM MENU customMenuClick func');
    let className = elementForCustomMenu.parentElement.children[1].className;
     if (className === 'category-text' && e.target.innerText === 'Edit Item') {
       setIsEditing(true);
     } else if (className === 'subject-text' && e.target.innerText === 'Edit Item') {
       setIsEditingSubject(true);
     } else if (e.target.innerText === 'Delete Item') {
      confirmDeleteForGroup(e);
     }
  };

  return (
    <div className="custom-menu" onClick={customMenuClick} style={{top: `${cords[0]}px`, left: '378px'}}>
      <IconEdit />
      <IconDelete />
    </div>
  )
};

export default CustomMenu;