/**
 * @jest-environment jsdom
*/


import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../components/Navbar';

//displays Searchbar comp and icons

describe('<Navbar />', () => {
  it('renders without error', () => {
     shallow(<Navbar />)
  });

});




