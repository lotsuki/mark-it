import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import Enzyme from '../../enzyme.config.js';
import Bookmarks from '../components/Bookmarks';


describe('<App />', () => {
  it('renders without error', () => {
    shallow(<App />);
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

it('sets the bookmarks prop as the `value` prop on the Bookmarks component', () => {
    const props = {
      bookmarks: []
    }
    const wrapper = mount(<App {...props} />);
    const BookmarkComp = wrapper.find(Bookmarks);
    expect(BookmarkComp.props().value).toEqual(props.bookmarks)
  });
});

