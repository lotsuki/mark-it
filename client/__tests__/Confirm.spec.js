
//when button is clicked, handleConfirmClick is invoked

/**
 * @jest-environment jsdom
*/


import React from 'react';
import { shallow, mount } from 'enzyme';
import Confirm from '../components/Confirm';


describe('<Confirm />', () => {
  it('renders without error', () => {
    shallow(<Confirm />);
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



