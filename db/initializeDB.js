const Document = require("./Document.js");
const db = require("./index.js");
const ObjectId = require("mongodb").ObjectID;

const user = new Document({
  date: '5-22-19',
  username: 'lotsuki',
  password: 'thisisahash123'
});

const groups = new Document({
  groups: [{
    id: 0,
    category: 'Tech',
    color: '#E58129',
    subjects: [
      {
        id: 0,
        subject: 'React'
      }
    ]
  },
  {
    id: 1,
    category: 'Food',
    color: '#E58129',
    subjects: [
      {
        id: 0,
        subject: 'Vegan'
      }
    ]
  }]
});

// let cat1id = ObjectId();
// let cat2id = ObjectId();
// let sub1id = ObjectId();
// let sub2id = ObjectId();


// const category = new Document({
//   id: cat1id,
//   category: 'Tech',
//   color: '#E58129',
// });
// const category1 = new Document({
//   id: cat2id,
//   category: 'Food',
//   color: '#E58129',
// });

// const subject = new Document({
//   id: sub1id,
//   categoryId: category.id,
//   subject: 'React'
// });

// const subject1 = new Document({
//   id: sub2id,
//   categoryId: category1.id,
//   subject: 'Vegan'
// });



// const groups = new Document({
//   groups: [{
//     id: ObjectId(),
//     category: 'Tech',
//     color: '#E58129',
//     subjects: ['React']
//   },
//   {
//     id: ObjectId(),
//     category: 'Food',
//     color: '#E58129',
//     subjects: ['Vegan']
//   }]
// });




 //db.documents .updateOne({groups:{$exists:true}, category: 'Hi'}, {$inc:{index:1}})
// const groups = new Document({
//   groups: [
//   {
//     index: 0,
//     category: 'Tech',
//     color: '#E58129',
//     subjects: [
//       {
//         index: 0,
//         subject: 'React'
//       },
//       {
//         index: 1,
//         subject: 'Python'
//       }
//     ]
//   },
//   {
//     index: 1,
//     category: 'Travel',
//     color: '#7EE3C8',
//     subjects: [
//       {
//         index: 0,
//         subject: 'Munich'
//       },
//       {
//         index: 1,
//         subject: 'London'
//       }
//     ]
//   },
//   {
//     index: 2,
//     category: 'Food',
//     color: '#DC6666',
//     subjects: [
//       {
//         index: 0,
//         subject: 'Vegan'
//       },
//       {
//         index: 1,
//         subject: 'Dessert'
//       }
//     ]
//   }]
// });


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



