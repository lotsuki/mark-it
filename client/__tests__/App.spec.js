/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import Main from '../components/Main';
import {render, fireEvent, cleanup, waitForElement, waitForDomChange} from 'react-testing-library';
import 'jest-dom/extend-expect';
const db = require('../../db/index.js');


describe('<App />',  () => {
  afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

  it('renders without error', () => {
     shallow(<App />);
  });
  it('renders <Main /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.children().find(Main)).toBeDefined();
    wrapper.unmount();
  });
  it('sets the userID prop on Main component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().find(Main).props('userID')).toBeTruthy();
  });
  it('sets the bmarks prop on Main component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().find(Main).props('bmarks')).toBeTruthy();
  });
  it('sets the titles prop on Main component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().find(Main).props('titles')).toBeTruthy();
  });
  it('invokes componentDidMount when loading', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    spy.mockImplementation(() => {data: {}})
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

});






