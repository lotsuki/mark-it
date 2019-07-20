

import React from 'react';
import { mount } from 'enzyme';
import Titles from '../components/Titles.jsx';
import data from '../../db/mockData.js'
afterAll(async done => {
   //Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

describe('<Titles />', () => {
  afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
      await db.close();
      done();
  });

  const event = {target:{parentElement:{firstChild:{innerText:'title'},parentElement:{parentElement:{parentElement:{firstChild:{firstChild:{innerText:'subject'}}}}}}}};
  const subject = 'subject';
  const title = 'title';
  const props = {
    titles: data.titles,
    setTitles: jest.fn(),
    showConfirm: ['Subject', 'Docs'],
    setShowConfirm: jest.fn()
  };

   it('when delete icon is clicked, setShowConfirm is invoked with correct props', () => {
    const wrapper = mount(<Titles {...props}/>)
    const buttons = wrapper.find('i')
    buttons.map(button => button.simulate('click', event))
    expect(props.setShowConfirm).toHaveBeenCalledTimes(buttons.length)
    if (!props.showConfirm) {
      expect(props.setShowConfirm).toHaveBeenCalledWith([subject, title])
    } else {
      expect(props.setShowConfirm).toHaveBeenCalledWith(false)
    }
    wrapper.unmount()
  });
});


