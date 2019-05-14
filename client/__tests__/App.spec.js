import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import Enzyme from '../../enzyme.config.js';


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
});
