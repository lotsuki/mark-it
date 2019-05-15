import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Bookmarks from '../components/Bookmarks';

//lists all categories
//adds categories
//category gets clicked, show menu is called
//show menu displays all subjects of category clicked


describe('<Bookmarks />', () => {
  it('renders without error', () => {
    shallow(<Bookmarks />);
  });
});