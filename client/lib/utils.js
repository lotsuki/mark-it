module.exports = {
  hasCategory: function(arr, cat) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) { return true; }
    }
    return false;
  },

  hasSubject: function(arr, subj, id) {
    let subjects = arr[id].subjects;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === subj) { return true; }
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
  findSubjectID: function(arr, catID, sub) {
    let subjects = arr[catID].subjects;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === sub) { return subjects[i].id; }
    }
    return null;
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
    if (target.id === 'app-container') { return false; }
    if (target.className === className) { return true; }
    return this.isCustomMenu(target.parentElement, 'custom-menu');
  },
  getCategoryText: function(e, target, className, context) {
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
  editCategories: function(arr, oldCategory, newCateogry) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === oldCategory) {
        arr[i].category = newCateogry; return;
      }
    }
  },
  editSubjects: function(arr, catID, oldSubject, newSubject) {
    let subjects = arr[catID].subjects;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === oldSubject) { subjects[i].subject = newSubject; return; }
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
  deleteCategory: function(arr, category) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === category) {
        arr.splice(i, 1); return;
      }
    }
  },
  deleteSubject: function(arr, catID, subj) {
    let subjects = arr[catID].subjects;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].subject === subj) {
        subjects.splice(i, 1); return;
      }
    }
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
};

