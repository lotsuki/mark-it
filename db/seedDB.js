const Document = require("./Document.js");
const db = require("./index.js");
const faker = require('faker');

//db.dropCollection("documents", () => {});


const categories = ['Tech', 'Travel', 'Food'];
const subjects = ['React', 'Munich', 'Desserts'];

const createBookmarks = () => {
  let bookmarks = [];

  for (let i = 1; i <= 30; i++) {
    let index = Math.floor(Math.random() * 3);
    bookmarks.push({
      category: categories[index],
      subject: subjects[index],
      title: faker.name.title(),
      url: faker.internet.url(),
      date: '5-22-19'
    });
  }
  return bookmarks;
};

// const createQuicklinks = () => {
//   let quicklinks = [];
//   for (let i = 1; i <= 15; i++) {
//     let index = Math.floor(Math.random() * 3);
//     let index2 = Math.floor(Math.random() * 6);
//     bookmarks.push({
//       isQuicklink: i % 2 === 0,
//       category: categories[index],
//       subject: subjects[index2],
//       title: faker.name.title(),
//       url: faker.internet.url(),
//       date: '5-22-19',
//       quicklinks[index]: true
//     });
//   }
// };



// function inputMockQuicklinks(mockData) {
//   return Document.create(mockData.quicklinks)
//     .then(() => db.close())
//     .catch(err => console.log("err", err));
// }

const bookmarks = createBookmarks();

function inputMockBookmarks() {
  return Document.create(bookmarks)
    .then(() => db.close())
    .catch(err => console.log("err", err));
}

//inputMockQuicklinks();
inputMockBookmarks();

