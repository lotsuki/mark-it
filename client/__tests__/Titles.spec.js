

import React from 'react';
import { shallow, mount } from 'enzyme';
import Titles from '../components/Titles.jsx';
import data from '../../db/mockData.js'


describe('<Titles />', () => {
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


