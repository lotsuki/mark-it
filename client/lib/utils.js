function findChild (elem, className) {
  if (elem.classList && elem.classList.contains(className)) {
    return elem.innerText;
  }
  for (var i = 0; i < elem.children.length; i++) {
    return findChild(elem.children[i], className);
  }
};

function findText(elem, parentClassName, elemClassName) {
  if (elem.classList && elem.classList.contains(parentClassName)) {
    return findChild(elem, elemClassName);
  }
  return findText(elem.parentElement, parentClassName, elemClassName);
};



module.exports = { findText }