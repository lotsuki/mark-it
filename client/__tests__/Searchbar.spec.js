//displays form and input
//if input value changes, handleSearch is invoked

/**
 * @jest-environment jsdom
*/


import React from 'react';
import { shallow, mount } from 'enzyme';
import Searchbar from '../components/Searchbar';

//displays Searchbar comp and icons

describe('<Searchbar />', () => {
  it('renders without error', () => {
    shallow(<Searchbar />)
  });

});