import React, { useEffect, useContext } from 'react';
import IconEdit from './IconEdit';
import IconDelete from './IconDelete';
import ContentContext from './ContentContext';

const CustomMenu = () => {
  const { groups, cords, setCords, elementForCustomMenu, setElementForCustomMenu, setIsEditing, showConfirm, setShowConfirm, setIsEditingSubject } = useContext(ContentContext);

  console.log(groups, cords, elementForCustomMenu, showConfirm, 'CUSTOM MENU');

  useEffect(() => {
    document.addEventListener('click', exitCustomMenu);
  }, [])

  //use useeffect to add event listener and return a clean up func
  //use memo for component caching/memoization

  const exitCustomMenu = (e) => {
    console.log(e.target, 'CUSTOM MENU exitCustomMenu');
    let target;
//fix

    //if target is custom menu
      //if custom menu clicked is not the same as previous
        //open custom menu
   // else
     //close menu
    // if (e.target.id !== 'edit-category' && e.target.id !== 'edit-subject' || e.target.id === 'app' || e.target.className === 'sidebar-container' || e.target.id === 'titles-container') {
    //   console.log('one')
    //   let menuIcons = document.getElementsByClassName('icon-custom-menu');
    //   for (var i = 0; i < menuIcons.length; i++) {
    //     menuIcons[i].style.visibility = '';
    //   }
    //   setIsEditing(false);
    //   setElementForCustomMenu('');
    //   document.removeEventListener('click', exitCustomMenu);
    // }
    // if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
    //   target = e.target.parentElement;
    // } else if (e.target.className.baseVal && e.target.className.baseVal.includes('icon-custom-menu')) { target = e.target }


    // if (target && target.parentElement.parentElement.className !== 'custom-menu' && e.target.className.baseVal && !target.className.baseVal.includes('icon-custom-menu')) {
    //   console.log('hey')
    //   elementForCustomMenu.style.visibility = '';
    //   setIsEditing(false);
    //   setElementForCustomMenu('');
    //   document.removeEventListener('click', exitCustomMenu);

    // }
    // if (e.target.className === 'category-text' || e.target.className === 'category') {
    //   setElementForCustomMenu('');
    //   document.removeEventListener('click', exitCustomMenu);
    // }
  };

  const confirmDeleteForGroup = async () => {
    console.log(e.target, 'CUSTOM MENU confirmDeleteForGroup func');
    let doc = document.getElementById('container');
    let confirmContainer = document.getElementById('confirm');

    if (!showConfirm) {
      await setShowConfirm(true);
      await deleteCategory(elementForCustomMenu.parentElement.children[1].innerText);
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
      confirmDeleteForGroup();
     }

    // if (group === 'category') {
    //   if (e.target.innerText === 'Edit Item') {
    //     setIsEditing(true);
    //   } else if (e.target.innerText === 'Delete Item') {
    //     confirmDeleteForCategory();
    //   }
    // } else if (group === 'subject') {
    //   if (e.target.innerText === 'Edit Item') {
    //     setIsEditingSub(true);
    //   } else if (e.target.innerText === 'Delete Item') {
    //     confirmDeleteForSubject();
    //   }
    // }
  };




  return (
    <div className="custom-menu" onClick={customMenuClick} style={{top: `${cords[0]}px`, left: '378px'}}>
      <IconEdit />
      <IconDelete />
    </div>
  )
};

export default CustomMenu;