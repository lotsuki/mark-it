  /**
 * @jest-environment jsdom
*/

  import React from 'react';
  import { shallow, mount } from 'enzyme';
  import Form from '../components/Form';


  //renders form with 4 inputs and submit button
  //onChange invokes X function
  //clears form after submit
  //if one field is without a value, form will not submit

  describe('<Form />', () => {
    // const event = { target: { value: 'Value' } };
     it('renders without error with correct props', () => {
       shallow(<Form />);
     });
     it('form contains 5 children that are inputs', () => {
       const wrapper = shallow(<Form />);
       expect(wrapper.find('form.form-container').children().length).toEqual(5);
       expect(wrapper.find('input').length).toEqual(5);
     });
     it('form contains 1 submit input', () => {
       // const wrapper = shallow(<Form />);
       // const hasSubmit = wrapper.find('input').filterWhere(input => input.type() === 'submit');
       // expect(hasSubmit.length).toBe(1);

     });
     it('form submit invokes submitForm', () => {
     });
  });
