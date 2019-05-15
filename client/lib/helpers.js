module.exports = {
  updateQuicklinks: function(data) {
    return data.filter(bookmark => {
      if(bookmark.quicklinks) { return bookmark; }
    })
  },
  updateBookmarks: function(data) {
    return data.filter(bookmark => {
      if(!bookmark.quicklinks) { return bookmark; }
    })
  }
  updateStateAfterPostReq: function(data) {
    console.log('heyyyy')
    return data;
  }
};