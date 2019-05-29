
//when button is clicked, handleConfirmClick is invoked

/**
 * @jest-environment jsdom
*/


import React from 'react';
import { shallow, mount } from 'enzyme';
import Confirm from '../components/Confirm';
import mockAxios from 'axios';


describe('<Confirm />', () => {
  const props = {
    setShowConfirm: jest.fn(),
    titleToDelete: 'title',
    subjectOfTitle: 'subject',
    showTitlesUpdate: jest.fn()
  }
  it('renders without error', () => {
    shallow(<Confirm {...props}/>);
  });
  it('when button is clicked, setShowConfirm is invoked with correct props"', () => {
    const event = {target: {innerText: 'No'}}
    const wrapper = shallow(<Confirm {...props}/>);
    const buttons = wrapper.find('button')
    buttons.map(button => button.simulate('click', event))
    expect(props.setShowConfirm).toHaveBeenCalledTimes(2)
    expect(props.setShowConfirm).toHaveBeenCalledWith(false)

  });
  it('when yes button is clicked, DELETE request is sent"', () => {
    const event = {target: {innerText: 'Yes'}}
    const wrapper = shallow(<Confirm {...props}/>);
    const button = wrapper.find('button').filterWhere(button => button.text() === 'Yes')
    button.simulate('click', event)
    expect(mockAxios.delete).toHaveBeenCalledTimes(1)
  });
  it('renders 2 buttons, first contains text "Yes", second contains text "No"', () => {
    const wrapper = shallow(<Confirm />);
    expect(wrapper.find('button').length).toBe(2);
    const texts = wrapper.find('button').map(button => button.text());
    expect(texts).toEqual(['Yes', 'No']);
  });
  it('renders a div with text "Are you sure you want to delete this bookmark?"', () => {
    const wrapper = shallow(<Confirm />);
    expect(wrapper.containsAnyMatchingElements([<div>Are you sure you want to delete this bookmark?</div>])).toBe(true);
  });
});




