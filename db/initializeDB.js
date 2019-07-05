const Document = require("./Document.js");
const db = require("./index.js");
//const data = require("./mockData.js");

const user = new Document({
  date: '5-22-19',
  username: 'lotsuki',
  password: 'thisisahash123'
});

const groups = new Document({
  groups: [
  {
    id: 0,
    category: 'Tech',
    color: '#E58129',
    subjects: [
      {
        id: 0,
        subject: 'React'
      },
      {
        id: 1,
        subject: 'Python'
      }
    ]
  },
  {
    id: 1,
    category: 'Travel',
    color: '#7EE3C8',
    subjects: [
      {
        id: 0,
        subject: 'Munich'
      },
      {
        id: 1,
        subject: 'London'
      }
    ]
  },
  {
    id: 2,
    category: 'Food',
    color: '#DC6666',
    subjects: [
      {
        id: 0,
        subject: 'Vegan'
      },
      {
        id: 1,
        subject: 'Dessert'
      }
    ]
  }]
});


// bmarks: {
//   id: id,
//   category: category,
//   subjects: []
// }

 // bmarks: {
 //    1: {Tech: ['React', 'Python']},
 //    2: {Travel: ['Munich', 'London']},
 //    3: {Food: ['Vegan', 'Desserts']}
 //  },
 //  colors: {
 //    Tech: '#E58129',
 //    Travel: '#7EE3C8',
 //    Food: '#DC6666'
 //  }


function inputInitialDoc() {
  return Document.create(user, groups)
    .then(() => db.close())
    .catch(err => console.log('err: ', err));
};

inputInitialDoc();

// bmarks: {
//     Tech: ['React', 'Python'],
//     Travel: ['Munich', 'London'],
//     Food: ['Vegan', 'Desserts']
//   },



