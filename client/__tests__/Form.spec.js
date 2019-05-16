  import React from 'react';
  import { shallow, mount, render } from 'enzyme';
  import Form from '../components/Form';
  import mockData from '../../db/mockData.js';

  describe('<Form />', () => {
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