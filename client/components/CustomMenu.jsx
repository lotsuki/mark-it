import React, { useEffect, useContext } from 'react';
import IconEdit from './IconEdit';
import IconDelete from './IconDelete';
import ContentContext from './ContentContext';
import utils from '../lib/utils';

const CustomMenu = () => {
  const { cords, elementForCustomMenu, setElementForCustomMenu, setIsEditing, showConfirm, setShowConfirm, setCategoryToDelete, setGroup } = useContext(ContentContext);

  useEffect(() => {
    document.addEventListener('click', exitCustomMenu);
  }, []);

  //handle document click event listener
  const exitCustomMenu = (e) => {
    let customMenuIcon = utils.findCustomMenuIcon(e.target);
    let isCustomMenu = utils.isCustomMenu(e.target, 'custom-menu');

    //don't exit if target is certain elements
    if(isCustomMenu || e.target.id === 'edit-category-input' || e.target.id === 'edit-subject' || customMenuIcon && customMenuIcon.className.baseVal !== elementForCustomMenu.className.baseVal) {
      return;

    //exit custom menu
    } else {
      console.log('no')
      //TODO: CLEAR TARGET (FROM CONTENT)

      let menuIcons = document.getElementsByClassName('icon-custom-menu');
      for (var i = 0; i < menuIcons.length; i++) {
        menuIcons[i].style.visibility = '';
      }
      setIsEditing(false);
      setElementForCustomMenu('');
      document.removeEventListener('click', exitCustomMenu);
    }
  };

  //handle delete button click
  const confirmDeleteForGroup = (e) => {
    let doc = document.getElementById('container');
    let confirmContainer = document.getElementById('confirm');
     //display confirmation popup
    if (!showConfirm) {
      setShowConfirm(true);
      setElementForCustomMenu(e.target);
      if (confirmContainer) {
        confirmContainer.className = 'confirm-container is-visuallyHid';
        doc.className = 'MainContainer is-blurred';
        confirmContainer.className = 'confirm-container';
        doc.parentElement.className = 'ModalOpen';
      }
    //hide confirmation popup
    } else {
      doc.parentElement.className = '';
      doc.className = '';
      confirmContainer.className = 'confirm-container is-hidden is-visuallyHid';
      setShowConfirm(false)
    }
  };

  //handle custom menu click
  const customMenuClick = (e) => {
    const CN = elementForCustomMenu.parentElement.children[1].className;
    const category = elementForCustomMenu.parentElement.children[1].innerText;
      //edit group
     if (e.target.innerText === 'Edit Item') {
       setIsEditing(true);
       CN === 'category-text' ? setGroup('category') : setGroup('subject');
     //delete group
     } else if (e.target.innerText === 'Delete Item') {
      confirmDeleteForGroup(e);
      setCategoryToDelete(category);
     }
  };
  console.log(cords, 'cords')
  return (
    <div className="custom-menu" onClick={customMenuClick} style={{top: `${cords[0]}px`, left: '378px'}}>
      <IconEdit />
      <IconDelete />
    </div>
  );
};

export default CustomMenu;