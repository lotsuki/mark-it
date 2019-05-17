import mockData from '../../db/mockData.js';

module.exports = {
  get: jest.fn(() => Promise.resolve(
    { data: mockData }
  )),
  post: jest.fn(form => Promise.resolve(
    { data: form }
  ))
};