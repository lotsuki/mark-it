import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FormInputs from '../components/FormInputs';

describe('<FormInputs />', () => {
  it('renders without error', () => {
    shallow(<FormInputs />);
  });
  it('contains correct props', () => {
    const wrapper = mount(<FormInputs />);
    expect(wrapper.props('setCategory')).toBeDefined();
    expect(wrapper.props('subjectChange')).toBeDefined();
    expect(wrapper.props('titleChange')).toBeDefined();
    expect(wrapper.props('urlChange')).toBeDefined();
    expect(wrapper.props('handleSubmit')).toBeDefined();
    wrapper.unmount();
  });
  it('renders a div with class formContainer', () => {
    const wrapper = shallow(<FormInputs />);
    expect(wrapper.find('div.formContainer')).toBeDefined();
  });
  it('div.formContainer contains 5 children with class formInputs', () => {
    const wrapper = mount(<FormInputs />);
    expect(wrapper.find('div.formContainer').children().length).toEqual(5);
    expect(wrapper.find('div.formContainer').children().filter('input.formInputs').length).toEqual(5);
    wrapper.unmount();
  });

});

