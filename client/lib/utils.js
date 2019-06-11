
//FIX: bookmarks is not recursing through categories comp, returning undefined (subject func)

function findChild (elem, className) {
  if (elem.classList && elem.classList.contains(className)) {
    return elem.innerText;
  }
  for (var i = 0; i < elem.children.length; i++) {
    return findChild(elem.children[i], className);
  }
};



function findText(elem, parentClassName, elemClassName) {

  if (elem.className === 'app') {
    //console.log(elem, elem.className, elem.classList)
    //console.log(elem.id, 'container')
    return findChild(elem, elemClassName);
  }
  if (elem.classList && elem.classList.contains(parentClassName)) {
    //console.log(elem, 'contains')
    return findChild(elem, elemClassName);
  }
   //console.log(elem, 'recurse')
  return findText(elem.parentElement, parentClassName, elemClassName);
};


module.exports = { findChild, findText }