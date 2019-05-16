  import React from 'react';
  import { shallow, mount, render } from 'enzyme';
  import Form from '../components/Form';
  import mockData from '../../db/mockData.js';

  describe('<Form />', () => {
    it('renders without error with correct props', () => {
      const props = {
        updateStateAfterPostReq: () => { console.log('rendered')}
      }
      shallow(<Form {...props}/>);
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