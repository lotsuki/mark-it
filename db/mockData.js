const faker = require('faker');

const categories = ['Tech', 'Travel', 'Food'];
const subjects = ['React', 'Munich', 'Desserts'];

const bmarks = {

}

const titles = [
  {
    title: faker.hacker.noun(),
    url: faker.hacker.noun()
  },
  {
    title: faker.hacker.noun(),
    url: faker.hacker.noun()
  },
  {
    title: faker.hacker.noun(),
    url: faker.hacker.noun()
  }
];


const mockUser = {
  category: faker.random.arrayElement(categories),
  subject: faker.random.arrayElement(subjects),
  title: faker.name.title(),
  url: faker.internet.url(),
  date: faker.date.past(5),
  username: faker.hacker.noun(),
  password: faker.hacker.noun(),
  bmarks: {
    Tech: ['React', 'Python'],
    Travel: ['Munich', 'London'],
    Food: ['Vegan', 'Desserts']
  }
};

const createBookmarks = () => {
  let bookmarks = [];

  for (let i = 1; i <= 30; i++) {
    let index = Math.floor(Math.random() * 3);
    bookmarks.push({
      category: categories[index],
      subject: subjects[index],
      title: faker.name.title(),
      url: faker.internet.url(),
      date: faker.date.past(5)
    });
  }
  return bookmarks;
};

let mockData = createBookmarks();

module.exports = { mockData, mockUser, titles };