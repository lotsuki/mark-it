module.exports = {
  findCategory: function(arr, cat) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) { return true; }
    }
    return false;
  },
  findSubject: function(arr, subj) {

  },
  findCategoryID: function(arr, cat) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) { return arr[i].id; }
    }
    return null;
  },
  whichGroup: function(arr, element) {
    let cat = element.parentElement.children[1].innerText;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].category === cat) { return 'category'; }
    }
    return 'subject';
  }
};