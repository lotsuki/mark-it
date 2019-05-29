
/**
 * @jest-environment jsdom
*/


import React from 'react';
import { shallow, mount } from 'enzyme';
import Searchbar from '../components/Searchbar';

//contains form that has input
//input onChange invokes handleSearch

describe('<Searchbar />', () => {
  it('renders without error', () => {
    shallow(<Searchbar />)
  });

});