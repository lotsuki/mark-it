import React, { useEffect, useContext } from 'react';
import IconEdit from './IconEdit';
import IconDelete from './IconDelete';
import ContentContext from './ContentContext';
import utils from '../lib/utils';

const CustomMenu = () => {
  const { groups, cords, setCords, elementForCustomMenu, setElementForCustomMenu, setIsEditing, showConfirm, setShowConfirm, setIsEditingSubject, setCategoryToDelete, setSubjectToDelete } = useContext(ContentContext);

  useEffect(() => {
    document.addEventListener('click', exitCustomMenu);
  }, [])

  //use useeffect to add event listener and return a clean up func

  const exitCustomMenu = (e) => {
    let customMenuIcon = utils.findCustomMenuIcon(e.target);
    let isCustomMenu = utils.isCustomMenu(e.target, 'custom-menu');

    if(isCustomMenu || e.target.id === 'edit-category-input'|| customMenuIcon && customMenuIcon.className.baseVal !== elementForCustomMenu.className.baseVal) {
      return;
    } else {
      let menuIcons = document.getElementsByClassName('icon-custom-menu');
      for (var i = 0; i < menuIcons.length; i++) {
        menuIcons[i].style.visibility = '';
      }
      setIsEditing(false);
      setElementForCustomMenu('');
      document.removeEventListener('click', exitCustomMenu);
    }
  };

  const confirmDeleteForGroup = (e) => {
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
    let className = elementForCustomMenu.parentElement.children[1].className;
    let category = elementForCustomMenu.parentElement.children[1].innerText;
     if (className === 'category-text' && e.target.innerText === 'Edit Item') {
       setIsEditing(true);
     } else if (className === 'subject-text' && e.target.innerText === 'Edit Item') {
       setIsEditingSubject(true);
     } else if (e.target.innerText === 'Delete Item') {
      confirmDeleteForGroup(e);
      setCategoryToDelete(category);
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