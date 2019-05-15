const Document = require("./Document.js");
const db = require("./index.js");

const initialDoc = [
  {
    category: 'quicklinks',
    subjects: [{
      subject: 'Starred'
    },
    {
      subject: 'Favorites'
    },
    {
      subject: 'Read'
    }]
  },
  {
    category: 'Tech',
    subjects: []
  },
  {
    category: 'Travel',
    subjects:[]
  },
  {
    category: 'Recipes',
    subjects:[]
  }
];

function inputInitialDoc() {
  return Document.create(initialDoc)
    .then(() => db.close())
    .catch(err => console.log("err", err));
};

inputInitialDoc();




