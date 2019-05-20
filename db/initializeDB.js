const Document = require("./Document.js");
const db = require("./index.js");

const user = {
  id: 1,
  username: 'lotsuki',
  password: 'thisisahash123',
  qlinks: [{Starred: []}, {Favorites: []}, {Read: []}],
  bmarks: [{Tech: ['React', 'Python']}, {Travel: ['Munich', 'London']}, {Food: ['Vegan', 'Desserts']}]
};

function inputInitialDoc() {
  return Document.create(user)
    .then(() => db.close())
    .catch(err => console.log('err: ', err));
};

inputInitialDoc();





