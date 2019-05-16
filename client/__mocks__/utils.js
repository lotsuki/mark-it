
module.exports = {
  updateQuicklinks: jest.fn(data =>  {
    return data.filter(bookmark => {
      if(bookmark.quicklink) {
        return {
          category: bookmark.category,
          sites: bookmark.sites
        };
      }
    })
  }),
  updateBookmarks: jest.fn(data => {
    return data.filter(bookmark => {
      if(!bookmark.quicklink) {
        return {
          category: bookmark.category,
          subjects: bookmark.subjects
        };
      }
    })
  }),
  updateStateAfterPostReq: jest.fn(data => {
    return data;
  }),
  displayContent: jest.fn((data, category) => {
    if (data.length < 1) { return []; }
    for (var i = 0; i < data.length; i++) {
      if (data[i].category === category) {
        if (data[i].quicklink) {
          return data[i].sites.map(site => ( site.title ))
        } else {
          return data[i].subjects.map(subject => ( subject.subject ))
        }
      }
    }
  })
};


