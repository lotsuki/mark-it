const Document = require("./Document.js");
const db = require("./index.js");
const mockData = require("./mockData.js");

db.dropCollection("documents", () => {});


let createMockQuicklinks = function() {

};

let createMockBookmarks = function() {

};


function inputMockQuicklinks(mockData) {
  return Document.create(mockData.quicklinks)
    .then(() => db.close())
    .catch(err => console.log("err", err));
}

function inputMockBookmarks(mockData) {
  return Document.create(mockData.bookmarks)
    .then(() => db.close())
    .catch(err => console.log("err", err));
}

inputMockQuicklinks();
inputMockBookmarks();

var mockData = [
  {
    quicklink: true,
    category: 'Starred',
    subjects: [{
      title: 'Parsing data',
      url: 'http',
      date: '5/20'
    }]
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
    subjects: [{
      subject: 'React',
      sites: [{
        title: 'Docs',
        url: 'http',
        date: '5/12/19'
      }]
    },
    {
      subject: 'Mongodb',
      sites: [{
        title: 'Docs',
        url: 'http',
        date: '5,23'
      }]
    }
    ]

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