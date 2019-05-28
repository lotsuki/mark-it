/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
// import { renderHook, act } from 'react-hooks-testing-library'
import Sidebar from '../components/Sidebar';
import Form from '../components/Form';

//displays Navbar and bookmarks on render

describe('Sidebar', () => {
  it('renders without error', () => {
    shallow(<Sidebar />)
  });

});
