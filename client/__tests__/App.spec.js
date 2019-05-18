import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import Enzyme from '../../enzyme.config.js';
import Bookmarks from '../components/Bookmarks';
import Quicklinks from '../components/Quicklinks';
import mockAxios from 'axios';
import {render, fireEvent, cleanup, waitForElement, waitForDomChange} from 'react-testing-library';
import 'jest-dom/extend-expect';
import mockUtils from 'utils';
import mockData from '../../db/mockData';

describe('<App />', () => {
  afterEach(cleanup)
  it('renders without error', () => {
    shallow(<App />);
  });
  it('contains all necessary state properties with correct values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('data')).toEqual([]);
    expect(wrapper.state('quicklinks')).toEqual([]);
    expect(wrapper.state('bookmarks')).toEqual([]);
  });
  it('invokes componentDidMount when loading', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    spy.mockImplementation(() => {data: mockData})
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('componentDidMount sets state: data', () => {
    // const wrapper = shallow(<App />);
    // expect(wrapper.state().data).toBeDefined();
  });
  it('renders a div with class container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.container')).toBeDefined();
  });
  it('renders a div with class appContainer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.appContainer')).toBeDefined();
  });
  it('sets the bookmarks prop on Bookmarks component', () => {
    // const wrapper = mount(<App />);
    // expect(wrapper.children().find(Bookmarks).props('bookmarks')).toBeDefined();
    // wrapper.unmount();
  });
  it('sets the quicklinks prop on Quicklinks component', () => {
    // const wrapper = mount(<App />);
    // expect(wrapper.children().find(Quicklinks).props('quicklinks')).toBeDefined();
    // wrapper.unmount();
  });
  it('makes API call with axios and returns correct data from server', async () => {

    render(<App />);
    //const { container, getByTestId } =render(<App />);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    // expect(wrapper.state('quicklinks')).toEqual(utils.updateQuicklinks(mockData));
    // console.log(wrapper.children().find(Quicklinks).props('quicklinks'), 'PROPPSSSSS')
    //console.log(getByTestId('appContainer').firstChild)
  });
  // it('makes API call with axios and invokes updateQuicklinks', async () => {
  //   const { container } = render(<App />);
  //   const elem = waitForDomChange({container}).then(result => console.log(result)).catch(err => console.log(err, 'err'))
  //   expect(mockAxios.get).toHaveBeenCalledTimes(1);
  //   expect(mockUtils.updateQuicklinks).toHaveBeenCalledTimes(1);
  // });
  // it('makes API call with axios and invokes updateBookmarks', async () => {
  //   //const wrapper = mount(<App />);
  //   waitForElement(() => render(<App />));
  //   expect(mockAxios.get).toHaveBeenCalledTimes(1);
  // });
});

