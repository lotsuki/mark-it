//when cat is clicked, handle click should be invoked

/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import Categories from '../components/Categories';

//if caateogry-wrapper is clicked, should render subjects comp
describe('<Categories />', () => {
  it('renders without error', () => {
    shallow(<Categories />);
  });
});