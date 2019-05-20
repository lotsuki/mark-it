
module.exports = {
  updateQuicklinks: function(data) {
    return data.filter(bookmark => {
      if(bookmark.isQuicklink) {
        return {
          category: bookmark.category,
          sites: bookmark.sites
        };
      }
    })
  },
  updateBookmarks: function(data) {
    return data.filter(bookmark => {
      if(!bookmark.isQuicklink) {
        return {
          category: bookmark.category,
          subjects: bookmark.subjects
        };
      }
    })
  },
  displayContent: function(data, category) {
    if (data.length < 1) { return; }
    for (var i = 0; i < data.length; i++) {
      if (data[i].category === category) {
        if (data[i].isQuicklink) {
          return this.titles(data[i].sites, 'title');
        } else {
          return this.titles(data[i].subjects, 'subject');
        }
      }
    }
  },
  titles: function(bookmarks, content) {
    return bookmarks.map(bookmark => ( bookmark[content]));
  }
  // titles: function(bookmarks, content) {
  //   var subject = document.createElement('a');
  //   subject.className = "dropdownContent";
  //   subject.href = '#';
  //   return bookmarks.map(bookmark => {
  //     subject.key = bookmark[content];
  //     subject.innerText = bookmark[content];
  //     return subject;
  //   });
  // }
};