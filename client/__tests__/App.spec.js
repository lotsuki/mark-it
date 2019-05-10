import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import Enzyme from '../../enzyme.config.js';


describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('displays <Quicklinks /> when rendering', () => {
    console.log(App);
  });
  // it('displays <Bookmarks /> when rendering', () => {

  // });
  // it('invokes componentDidMount when loading', () => {

  // });
  // it('componentDidMount passes correct data to get request', () => {

  // });
  // it('componentDidMount sets state: properties', () => {

  // });
  // it('titleChange sets state: title', () => {

  // });
  // it('urlChange sets state: url', () => {

  // });
  // it('subjectChange sets state: subject', () => {

  // });
  // it('handleSubmit passes correct data to post request', () => {

  // });
  // it('handleSubmit receives data where all properties have a value', () => {

  // });
  // it('handleSubmit receives data where all properties are strings', () => {

  // });
  // it('handleSubmit sets state: data', () => {

  // });
  // it('after handleSubmit sets state, all ', () => {

  // });
});
