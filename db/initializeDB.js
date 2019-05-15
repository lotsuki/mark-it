const Document = require("./Document.js");
const db = require("./index.js");
const bookmarks = [
  {
    quicklink: true,
    category: 'Starred',
    subjects: []
  },
  {
    quicklink: true,
    category: 'Favorites',
    subjects: []
  },
  {
    quicklink: true,
    category: 'Read',
    subjects: []
  },

  {
    category: 'Tech',
    subjects: []
  },
  {
    category: 'Travel',
    subjects: []
  },
  {
    category: 'Recipes',
    subjects: []
  }
];

function inputInitialDoc() {
  return Document.create(bookmarks)
    .catch(err => console.log('err: ', err));
};

function updateSchema() {
  Document.updateMany({quicklink: true}, {$rename: {subjects: 'sites'}})
    .then(() => db.close())
    .catch(err => console.log('err: ', err));
};

inputInitialDoc();

//fix later
setTimeout(updateSchema, 300);




