  import React from 'react';
  import { shallow, mount, render } from 'enzyme';
  import Form from '../components/Form';
  import mockData from '../../db/mockData.js';
  import mockUtils from '../__mocks__/utils.js';

  describe('<Form />', () => {
    const event = { target: { value: 'Value' } };
    it('renders without error with correct props', () => {
      const props = {
        updateStateAfterPostReq: () => { console.log('rendered')}
      };
      shallow(<Form {...props}/>);
    });
    it('contains all necessary state properties with correct values', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.state('data')).toEqual([]);
      expect(wrapper.state('subject')).toEqual('');
      expect(wrapper.state('title')).toEqual('');
      expect(wrapper.state('url')).toEqual('');
      expect(wrapper.state('starred')).toEqual(false);
      expect(wrapper.state('favorites')).toEqual(false);
    });
    it('titleChange sets state: title', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.state('title')).toBe('');
      wrapper.instance().titleChange(event);
      expect(wrapper.state('title')).toBe('Value');

    });
    it('urlChange sets state: url', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.state('url')).toBe('');
      wrapper.instance().urlChange(event);
      expect(wrapper.state('url')).toBe('Value');
    });
    it('subjectChange sets state: subject', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.state('subject')).toBe('');
      wrapper.instance().subjectChange(event);
      expect(wrapper.state('subject')).toBe('Value');
    });
    it('setCategory sets state: category', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.state('category')).toBe('');
      wrapper.instance().setCategory(event);
      expect(wrapper.state('category')).toBe('Value');
    });
    it('handleSubmit sends POST req with correct data', () => {

    });
    it('handleSubmit sets state: data', () => {

    });
    it('handleSubmit invokes updateStateAfterPostReq with correct arg', () => {

    });
  });

  // it('titleChange sets state: title', () => {
  //   const spy = jest.spyOn(App.prototype, 'titleChange');
  //   const wrapper = shallow(<App />);
  //   wrapper.instance().titleChange();
  // });
  // it('urlChange sets state: url', () => {

  // });
  // it('subjectChange sets state: subject', () => {

  // });
    // it('handleSubmit updates state: data', () => {
  //   //need to create mock axios post req
  // });