  import React from 'react';
  import { shallow, mount, render } from 'enzyme';
  import Form from '../components/Form';
  import FormInputs from '../components/FormInputs';
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
    it('returns FormInput component', () => {
      const wrapper = mount(<Form />);
      expect(wrapper.children().find(FormInputs)).toBeDefined();
      wrapper.unmount();
    });
    it('contains correct props', () => {
      const wrapper = mount(<Form />);
      expect(wrapper.props('updateStateAfterPostReq')).toBeDefined();
      wrapper.unmount();
    });
  });
