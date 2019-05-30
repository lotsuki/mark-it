import React from 'react';
import { shallow, mount } from 'enzyme';
import Confirm from '../components/Confirm';
import mockAxios from 'axios';
const db = require('../../db/index.js');

describe('<Confirm />', () => {
  afterAll(async done => {
   //Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

  const props = {
    setShowConfirm: jest.fn(),
    titleToDelete: 'title',
    subjectOfTitle: 'subject',
    showTitlesUpdate: jest.fn()
  };

  it('renders without error', () => {
    shallow(<Confirm {...props}/>);
  });
  it('when button is clicked, setShowConfirm is invoked with correct props"', () => {
    const event = {target: {innerText: 'No'}}
    const wrapper = mount(<Confirm {...props}/>);
    const buttons = wrapper.find('button')
    buttons.map(button => button.simulate('click', event))
    expect(props.setShowConfirm).toHaveBeenCalledTimes(2)
    expect(props.setShowConfirm).toHaveBeenCalledWith(false)
    wrapper.unmount()

  });
  it('when yes button is clicked, DELETE request is sent"', () => {
    const event = {target: {innerText: 'Yes'}}
    const wrapper = mount(<Confirm {...props}/>);
    const button = wrapper.find('button').filterWhere(button => button.text() === 'Yes')
    button.simulate('click', event)
    expect(mockAxios.delete).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  });
  it('renders 2 buttons, first contains text "Yes", second contains text "No"', () => {
    const wrapper = mount(<Confirm />);
    expect(wrapper.find('button').length).toBe(2);
    const texts = wrapper.find('button').map(button => button.text());
    expect(texts).toEqual(['Yes', 'No']);
    wrapper.unmount()
  });
  it('renders a div with text "Are you sure you want to delete this bookmark?"', () => {
    const wrapper = shallow(<Confirm />);
    expect(wrapper.containsAnyMatchingElements([<div>Are you sure you want to delete this bookmark?</div>])).toBe(true);
  });
});





