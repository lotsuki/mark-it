const Document = require("./Document.js");
const db = require("./index.js");
const data = require("./mockData.js");

// const user = new Document({
//   date: '5-22-19',
//   username: 'lotsuki',
//   password: 'thisisahash123',
//   bmarks: {
//     Tech: ['React', 'Python'],
//     Travel: ['Munich', 'London'],
//     Food: ['Vegan', 'Desserts']
//   }
// });


function inputInitialDoc() {
  return Document.create(data.mockUser)
    .then(() => db.close())
    .catch(err => console.log('err: ', err));
};

inputInitialDoc();

 // bmarks: [{Tech: ['React', 'Python']}, {Travel: ['Munich', 'London']}, {Food: ['Vegan', 'Desserts']}]



