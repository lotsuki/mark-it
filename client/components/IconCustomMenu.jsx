import React, { useContext } from 'react';
import ContentContext from './ContentContext';
import utils from '../lib/utils';

const IconCustomMenu = ({ name }) => {
  const { groups, elementForCustomMenu, setCords, setElementForCustomMenu, setCategoryID, setSubjectToDelete } = useContext(ContentContext);
  //console.log(openCustomMenu, 'ICON CUSTOM MENU openCustomMenu');

  const openCustomMenu = (e) => {
    console.log(e.target, 'CONTENT openCustomMenu func');
    //make recurse function to check if other dropdowns are open
    let target;
    let wrapper = document.getElementById('section-wrapper');

    if (e.target.tagName === 'path' && e.target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      target = e.target.parentElement;
    } else if (e.target.className.baseVal.includes('icon-custom-menu')) {
      target = e.target
    }
    let group = utils.whichGroup(groups, target);
    let rect = target.getBoundingClientRect();
    let top = rect.top + 8;

    console.log(group, target, 'GROUP AND TARGET IN OPEN CUSTOM MENU')

    if (elementForCustomMenu) {
      elementForCustomMenu.style.visibility = '';
    }
    console.log(elementForCustomMenu, 'OPENCUSTOMMENU elementforcustommenu')
    if ((group === 'category' )&& ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )) {
      console.log('ICONMENU openCustomMenu, group === category');
      let cat = target.parentElement.children[1].innerText;
      let id = utils.findCategoryID(groups, cat);
      if (id >= 0) { setCategoryID(id); }

      target.style.visibility = 'visible';
      setCords([top, rect.left]);
      setElementForCustomMenu(target);
    } else if ((group === 'subject') && ( !elementForCustomMenu || elementForCustomMenu && elementForCustomMenu.className.baseVal !== target.className.baseVal )){
       console.log('ICONMENU openCustomMenu, group === subject');
      let subject = target.parentElement.children[1].innerText;
      target.style.visibility = 'visible';
      setCords([top, rect.left]);
      setElementForCustomMenu(target);
      setSubjectToDelete(subject);
    }
  };

  return (
    <svg className= {`icon-custom-menu ${name}`} onClick={openCustomMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="52"viewBox="0 0 40 40" fill="gray" pointerEvents= 'none' style={{pointerEvents: 'all'}}>
      <path d="M 16 6 C 14.894531 6 14 6.894531 14 8 C 14 9.105469 14.894531 10 16 10 C 17.105469 10 18 9.105469 18 8 C 18 6.894531 17.105469 6 16 6 Z M 16 14 C 14.894531 14 14 14.894531 14 16 C 14 17.105469 14.894531 18 16 18 C 17.105469 18 18 17.105469 18 16 C 18 14.894531 17.105469 14 16 14 Z M 16 22 C 14.894531 22 14 22.894531 14 24 C 14 25.105469 14.894531 26 16 26 C 17.105469 26 18 25.105469 18 24 C 18 22.894531 17.105469 22 16 22 Z "></path>
    </svg>
  )
}

export default IconCustomMenu;