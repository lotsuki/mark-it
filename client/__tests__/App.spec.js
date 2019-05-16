import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import Enzyme from '../../enzyme.config.js';
import Bookmarks from '../components/Bookmarks';


describe('<App />', () => {
  it('renders without error', () => {
    shallow(<App />);
  });
  it('contains all necessary state properties with correct values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('data')).toEqual([])
    expect(wrapper.state('quicklinks')).toEqual([])
    expect(wrapper.state('bookmarks')).toEqual([])
    expect(wrapper.state('isLoading')).toEqual(true)
  //   expect(Array.isArray(wrapper.state('data'))).toEqual(true)
  //   expect(Array.isArray(wrapper.state('quicklinks'))).toEqual(true)
  //   expect(Array.isArray(wrapper.state('bookmarks'))).toEqual(true)
  //   expect(typeof wrapper.state('isLoading')).toEqual('boolean')
   });
  it('invokes componentDidMount when loading', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('sets state: data', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().data).toBeDefined();
  });

// it('sets the bookmarks prop as the `value` prop on the Bookmarks component', () => {
//     const props = {
//       bookmarks: []
//     }
//     const wrapper = mount(<App {...props} />);
//     const BookmarkComp = wrapper.find(Bookmarks);
//     expect(BookmarkComp.props().value).toEqual(props.bookmarks)
//   });
});

