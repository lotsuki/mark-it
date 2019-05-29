

import React from 'react';
import { shallow, mount } from 'enzyme';
import Titles from '../components/Titles.jsx';
import data from '../../db/mockData.js'


//confirmDelete invokes displayConfirm with correct args

describe('<Titles />', () => {
  const event = {target:{parentElement:{firstChild:{innerText:'title'},parentElement:{parentElement:{parentElement:{firstChild:{firstChild:{innerText:'subject'}}}}}}}};
  const subject = 'subject';
  const title = 'title';
  const props = {
    titles: data.titles,
    setTitles: jest.fn(),
    displayConfirm: jest.fn()
  };

   it('when delete icon is clicked, displayConfirm is invoked with correct props', () => {
    const wrapper = mount(<Titles {...props}/>)
    const buttons = wrapper.find('i')
    buttons.map(button => button.simulate('click', event))
    expect(props.displayConfirm).toHaveBeenCalledTimes(buttons.length)
    expect(props.displayConfirm).toHaveBeenCalledWith(subject, title)
    wrapper.unmount()
  });
});



