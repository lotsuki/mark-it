import data from '../../db/mockData.js';

 module.exports = {
  get: jest.fn(() => Promise.resolve(
    {data: [data.mockUser] }
  )),
  delete: jest.fn(() => Promise.resolve(
    {data: data.mockData }
  )),
  post: jest.fn(form => Promise.resolve(
    { data: form }
  ))
  // handleSubmit: jest.fn(() => {
  //   var data = {
  //     category: 'Category',
  //     subject: 'Subject',
  //     title: 'Title',
  //     url: 'URL',
  //     date: '3-12-2019'
  //   };

  //   mockAxios.post(data);
  // }),
  // handleClick: jest.fn(() => {
  //   console.log('hi')
  // })
 };


