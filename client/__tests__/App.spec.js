import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import Enzyme from '../../enzyme.config.js';
import Bookmarks from '../components/Bookmarks';
import Quicklinks from '../components/Quicklinks';

describe('<App />', () => {
  it('renders without error', () => {
    shallow(<App />);
  });
  it('contains all necessary state properties with correct values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('data')).toEqual([]);
    expect(wrapper.state('quicklinks')).toEqual([]);
    expect(wrapper.state('bookmarks')).toEqual([]);
    expect(wrapper.state('isLoading')).toEqual(true);
  });
  it('invokes componentDidMount when loading', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
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
    const wrapper = mount(<App />);
    expect(wrapper.children().find(Bookmarks).props('bookmarks')).toBeDefined();
    wrapper.unmount();
  });
  it('sets the quicklinks prop on Quicklinks component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.children().find(Quicklinks).props('quicklinks')).toBeDefined();
    wrapper.unmount();
  });
});

