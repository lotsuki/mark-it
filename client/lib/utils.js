module.exports = {
  hasCategory: function(arr, cat) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) {
        return true;
      }
    }
    return false;
  },
  findCategoryID: function(arr, cat) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) { return arr[i].id; }
    }
  },
  findCatIDWithSub: function(arr, sub) {
    for (var i = 0; i < arr.length; i++) {
      for (var x = 0; x < arr[i].subjects.length; x++) {
        if (arr[i].subjects[x].subject === sub) { return arr[i].id; }
      }
    }
  },
  getCategoryText: function(e, target, className, context) {
    if (context === 'handle') {
      return className === 'category' ? target.children[1].innerText
      : className === 'category-text' ? target.innerText : e.currentTarget.firstChild.children[1].innerText;
    } else {
      if (target && target.className.baseVal.includes('icon-custom-menu')) {
        console.log('YES')
        return target.parentElement.children[1].innerText;
      } else if (target) {
        return target.innerText;
      }
    }
  },
  editCategories: function(arr, oldCategory, newCateogry) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === oldCategory) {
        arr[i].category = newCateogry; return;
      }
    }
  },
  deleteCategory: function(arr, category) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === category) {
        arr.splice(i, 1); break;
      }
    }
    if (arr.length < 1) { return []; }
    else {
      for (var x = 0; x < arr.length; x++) {
        arr[x].id = count;
        ++count;
      }
      return arr;
    }
  },
  hasSubject: function(arr, subj, id) {
    let subjects = arr[id].subjects;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === subj) { return true; }
    }
    return false;
  },
  findSubjectID: function(arr, catID, sub) {
    let subjects = arr[catID].subjects;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === sub) { return subjects[i].id; }
    }
    return null;
  },
  getSubjectText: function(e, target, className, context) {
    if (context === 'handle') {
      return className === 'category' ? target.children[1].innerText
      : className === 'category-text' ? target.innerText : e.currentTarget.firstChild.children[1].innerText;
    } else {
      if (target && target.className.baseVal.includes('icon-custom-menu')) {
        return target.parentElement.children[1].innerText;
      } else if (target) {
        return target.innerText;
      }
    }
  },
  editSubjects: function(arr, catID, oldSubject, newSubject) {
    let subjects = arr[catID].subjects;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === oldSubject) { subjects[i].subject = newSubject; return; }
    }
  },
  deleteSubject: function(arr, catID, subj) {
    let subjects = arr[catID].subjects;
    let count = 0;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === subj) {
        subjects.splice(i, 1);
      }
    }
    if (arr.length < 1) { return []; }
    else {
      for (var x = 0; x < subjects.length; x++) {
        subjects[x].id = count;
        ++count;
      }
      console.log(subjects, 'subjects')
      return subjects;
    }
  },
  editTitles: function(arr, titleToDelete, func) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].title === titleToDelete) {
        arr.splice(i, 1);
        func(arr);
        return;
      }
    }
  },
  whichGroup: function(arr, element) {
    let cat = element.parentElement.children[1].innerText;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) { return 'category'; }
    }
    return 'subject';
  },
  isCustomMenuIcon: function(target) {
    return (target.className.baseVal && target.className.baseVal.includes('icon-custom-menu')
       || target.parentElement.className.baseVal && target.parentElement.className.baseVal.includes('icon-custom-menu'));
  },
  isCustomMenu: function(target, className) {
    if (target && target.id === 'app-container') { return false; }
    if (target && target.className === className) { return true; }
    return this.isCustomMenu(target.parentElement, 'custom-menu');
  },
  findCustomMenuIcon: function(target) {
    if (target.tagName === 'path' && target.parentElement.className.baseVal.includes('icon-custom-menu')) {
      return target.parentElement;
    } else if (target.className.baseVal && target.className.baseVal.includes('icon-custom-menu')) { return target }
    else { return false; }
  }
};

