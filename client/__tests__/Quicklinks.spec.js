import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Quicklinks from '../components/Quicklinks';

describe('<Quicklinks />', () => {
  it('renders without error', () => {
    shallow(<Quicklinks />);
  });
});
