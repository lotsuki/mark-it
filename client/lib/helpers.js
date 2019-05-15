module.exports = {
  updateQuicklinks: function(data) {
    return data.filter(bookmark => {
      if(bookmark.category === 'quicklinks') { return bookmark.subjects; }
    })
  },
  updateBookmarks: function(data) {
    return data.filter(bookmark => {
      if(bookmark.category !== 'quicklinks') {
        return {
          category: bookmark.category,
          subjects: bookmark.subjects
        };
      }
    })
  },
  updateStateAfterPostReq: function(data) {
    console.log('heyyyy')
    return data;
  }
};