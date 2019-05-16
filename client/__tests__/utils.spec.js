import React from 'react';
import { shallow, mount, render } from 'enzyme'
import utils from '../lib/utils.js';
import App from '../components/App';
import mockData from '../../db/mockData.js';
import Dropdown from '../components/Dropdown';

describe('updateQuicklinks', () => {
  // let mockModule;
  // beforeEach(() => {
  //   mockModule = jest.mock('../__mocks__/utils.js')
  // });
  it('invoked in App component at GET request', () => {
    const spy = jest.spyOn(utils, 'updateQuicklinks');
  });
});

describe('updateBookmarks', () => {
  it('invoked in App component at GET request', () => {
    const wrapper = shallow(<App />);
  });
});

describe('updateStateAfterPostReq', () => {
  it('invoked in Form component after POST request response', () => {
    const wrapper = shallow(<App />);
  });
});

describe('displayContent', () => {
  it('invoked in Dropdown component when state property showMenu is true', () => {
    const spy = jest.spyOn(utils, 'displayContent');
    const props = {
      data: mockData
    }
    const wrapper = shallow(<Dropdown {...props}/>);
    expect(spy).not.toHaveBeenCalled();
    wrapper.setState({ showMenu: true })
    wrapper.update();
    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
  it('is invoked with two arguments', () => {
    const spy = jest.spyOn(utils, 'displayContent');
    const props = {
      data: mockData
    }
    const wrapper = shallow(<Dropdown {...props}/>);
    expect(spy).not.toHaveBeenCalled();
    wrapper.setState({ showMenu: true })
    wrapper.update();
    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
  it('returns an array of strings', () => {
    const spy = jest.spyOn(utils, 'displayContent');
    const returnValue = spy(mockData, 'Tech');
    const isString = returnValue.filter(string => typeof string === 'string');
    expect(Array.isArray(returnValue)).toBe(true);
    expect(returnValue.length).toEqual(isString.length);
    jest.restoreAllMocks();
  });
});



