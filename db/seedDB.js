// const Document = require("./Document.js");
// const db = require("./index.js");
// const data = require('./mockData.js');
// const faker = require('faker');
// const fs = require('fs');



// const categories = ['Tech', 'Travel', 'Food', 'News', 'Music', 'Sports', 'Photography', 'Misc'];
// const subjects = ['React', 'Munich', 'Desserts', 'MongoDB', 'Supertest', 'Folk', 'Vegan', 'Politics'];
// let index = 0;

// const createBookmarks = () => {
//   let bookmarks = [];

//   for (let i = 1; i <= 200; i++) {
//     let index = Math.floor(Math.random() * 6);
//     bookmarks.push({
//       category: categories[index],
//       subject: subjects[index],
//       title: faker.name.title(),
//       url: faker.internet.url(),
//       date: faker.date.past(5)
//     });
//   }
//   return bookmarks;
// };

// let mockData = createBookmarks();

// async function inputMockBookmarks() {
//   let data = await createBookmarks()
//   return Document.insertMany(data)
//     .then(() => db.close())
//     .catch(err => console.log("err", err));
// }

// inputMockBookmarks();


// let writeStream = fs.createWriteStream('text.csv');
// let bookmarks = [];

// function createBookmarks() {
//   index++;
//   let i = Math.floor(Math.random() * 8);
//   let bookmarks = [];
//   bookmarks.push({
//     category: categories[i],
//     subject: subjects[i],
//     title: faker.name.title(),
//     url: faker.internet.url(),
//     date: faker.date.past(5)
//   })

//   if (index > 10000) {
//       return Document.insertMany(bookmarks)
//         .then(() => db.close())
//         .catch(err => console.log("err", err));
//   }
// };

// async () => {
//   await createBookmarks()
// }

// let bookmarks = async() => {
//   await createBookmarks()
// }

// (function createBookmarks(index) {
//   index++;
//   let i = Math.floor(Math.random() * 8);
//   let category = categories[i];
//   let subject = subjects[i];
//   let title = faker.name.title();
//   let url = faker.internet.url();
//   let date = faker.date.past(5);

//   if (index % 1000) {

//   }

//   if (index > 100000) {
//     return writeStream.end();
//   }
//   var ableToWrite = writeStream.write(`${category},${subject},${title},${url},${date}\n`);
//   if (!ableToWrite) {
//     writeStream.once('drain', createBookmarks);
//   } else {
//     createBookmarks();
//   }
// })();



// let mockData = createBookmarks();


// const createBookmarks = () => {
//   let bookmarks = [];

//   for (let i = 1; i <= 100000; i++) {
//     let index = Math.floor(Math.random() * 3);
//     bookmarks.push({
//       category: categories[index],
//       subject: subjects[index],
//       title: faker.name.title(),
//       url: faker.internet.url(),
//       date: faker.date.past(5)
//     });
//   }
//   return bookmarks;
// };

// let mockData = createBookmarks();

// function inputMockBookmarks() {
//   return Document.create(data.mockData)
//     .then(() => db.close())
//     .catch(err => console.log("err", err));
// }

// inputMockBookmarks();











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


//inputMockQuicklinks();

