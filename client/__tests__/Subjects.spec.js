

import React from 'react';
import { shallow, mount } from 'enzyme';
import Subjects from '../components/Subjects';
import data from '../../db/mockData.js'

describe('<Subjects />', () => {
  const bookmarks = data.mockUser.bmarks
  const props = {
    bmarks: bookmarks,
    category: Object.keys(bookmarks)[0],
    displayConfirm: () => {},
    titlesUpdate: []
  };
  console.log(props)
  it('renders without error', () => {
     shallow(<Subjects {...props}/>);
  });
  it('container has same number of children as bmarks length', () => {
     const wrapper = shallow(<Subjects {...props}/>)
     const container = wrapper.find('.subject-container').children().length
     console.log(wrapper.debug())
  });


});


