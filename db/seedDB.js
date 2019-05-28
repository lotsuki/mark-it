// const Document = require('./Document.js');
// const db = require('./index.js');
// const mockData = require('./mockData.js');

// function inputMockBookmarks() {
//   return Document.create(mockData)
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

