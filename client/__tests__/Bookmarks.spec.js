import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Bookmarks from '../components/Bookmarks';

describe('<Bookmarks />', () => {
  it('renders without error', () => {
    shallow(<Bookmarks />);
  });
});