module.exports = {
  updateQuicklinks: function(data) {
    return data.filter(bookmark => {
      if(bookmark.quicklink) {
        return {
          category: bookmark.category,
          sites: bookmark.sites
        };
      }
    })
  },
  updateBookmarks: function(data) {
    return data.filter(bookmark => {
      if(!bookmark.quicklink) {
        return {
          category: bookmark.category,
          subjects: bookmark.subjects
        };
      }
    })
  },
  updateStateAfterPostReq: function(data) {
    return data;
  }
};