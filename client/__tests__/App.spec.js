/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import Sidebar from '../components/Sidebar';
import {render, fireEvent, cleanup, waitForElement, waitForDomChange} from 'react-testing-library';
import 'jest-dom/extend-expect';


describe('<App />',  () => {
  it('renders without error', () => {
     shallow(<App />);
  });
  it('renders <Sidebar /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().find(Sidebar)).toBeDefined();
  });
  it('sets the userID prop on Sidebar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().find(Sidebar).props('userID')).toBeTruthy();
  });
  it('sets the bmarks prop on Sidebar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().find(Sidebar).props('bmarks')).toBeTruthy();
  });
  it('sets the titles prop on Sidebar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().find(Sidebar).props('titles')).toBeTruthy();
  });
});




