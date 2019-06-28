// const faker = require('faker');

// const categories = ['Tech', 'Travel', 'Food'];
// const subjects = ['React', 'Munich', 'Desserts'];


// const titles = [
//   {
//     title: faker.hacker.noun(),
//     url: faker.hacker.noun()
//   },
//   {
//     title: faker.hacker.noun(),
//     url: faker.hacker.noun()
//   },
//   {
//     title: faker.hacker.noun(),
//     url: faker.hacker.noun()
//   }
// ];


// const mockUser = {
//   // username: faker.hacker.noun(),
//   // password: faker.hacker.noun(),
//   // bmarks: {
//   //   Tech: [],
//   //   Travel: [],
//   //   Food: []
//   // }
// };

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

// module.exports = { mockData, mockUser, titles };