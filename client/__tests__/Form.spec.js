import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../components/Form';
import mockAxios from 'axios';
const db = require('../../db/index.js');

//renders form with 4 inputs and submit button
//onChange invokes X function
//clears form after submit
//if one field is without a value, form will not submit

const updateInput = (wrapper, instance, newVal) => {
  const input = wrapper.find(instance)
  input.simulate('change', {
    target: {value: newVal}
  })
  return wrapper.find(instance)
};

describe('<Form />', () => {
  afterAll(async done => {
   //Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

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
    const wrapper = mount(<Form />)
    const hasSubmit = wrapper.find('.form-inputs').findWhere(input => input.prop('type' ) === 'submit')
    expect(hasSubmit.length).toBe(1);
    wrapper.unmount()
  });
  it('form submit invokes submitForm', () => {

  });
  it('allows users to fill out form', () => {
    const wrapper = shallow(<Form />)
   // const categoryInput = updateInput(wrapper, 'category-input', 'Category')
   // const subjectInput = updateInput(wrapper, '[data-testid="subject-input"]', 'Subject')
   // const titleInput = updateInput(wrapper, '[data-testid="title-input"]', 'Title')
   // const urlInput = updateInput(wrapper, '[data-testid="url-input"]', 'url')
   // expect(categoryInput.props().value).toBe('Category')
   // expect(subjectInput.props().value).toBe('Subject')
   // expect(titleInput.props().value).toBe('Title')
   // expect(urlInput.props().value).toBe('url')
  });
});
