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
});

