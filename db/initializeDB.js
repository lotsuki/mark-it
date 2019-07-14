// const Document = require("./Document.js");
// const db = require("./index.js");
// const ObjectId = require("mongodb").ObjectID;

// const user = new Document({
//   date: '5-22-19',
//   username: 'lotsuki',
//   password: 'thisisahash123'
// });

// const groups = new Document({
//   groups: [{
//     id: 0,
//     category: 'Tech',
//     color: '#E58129',
//     subjects: [
//       {
//         id: 0,
//         subject: 'React'
//       }
//     ]
//   },
//   {
//     id: 1,
//     category: 'Food',
//     color: '#E58129',
//     subjects: [
//       {
//         id: 0,
//         subject: 'Vegan'
//       }
//     ]
//   }]
// });


// function inputInitialDoc() {
//   return Document.create(user, groups)
//     .then(() => db.close())
//     .catch(err => console.log('err: ', err));
// };

// inputInitialDoc();





