import React from 'react';
import { shallow, mount } from 'enzyme';
import FormInputs from '../components/FormInputs';
import Form from '../components/Form';
import mockAxios from 'axios';
import {render, fireEvent, cleanup, waitForElement, waitForDomChange} from 'react-testing-library';
import 'jest-dom/extend-expect';

//clears form after submit
//onChange updates text in inputs

describe('<FormInputs />', () => {
   afterEach(cleanup)
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
    expect(wrapper.find('form.formContainer')).toBeDefined();
  });
  it('form.formContainer contains 5 children with class formInputs', () => {
    const wrapper = mount(<FormInputs />);
    expect(wrapper.find('form.formContainer').children().length).toEqual(5);
    expect(wrapper.find('form.formContainer').children().filter('input.formInputs').length).toEqual(5);
    wrapper.unmount();
  });
  it('form.formContainer first child is a text input with placeholder Category', async () => {
    const { container, getByTestId  } = render(<FormInputs />);
    const formContainer = container.firstChild;
    const categoryInput = getByTestId('category');
    expect(formContainer.children[0]).toEqual(categoryInput);
    expect(categoryInput.placeholder).toEqual('Category');

  });
  it('form.formContainer second child is a text input with placeholder Subject', async () => {
    const { container, getByTestId  } = render(<FormInputs />);
    const formContainer = container.firstChild;
    const subjectInput = getByTestId('subject');
    expect(formContainer.children[1]).toEqual(subjectInput);
    expect(subjectInput.placeholder).toEqual('Subject');
  });
  it('form.formContainer third child is a text input with placeholder Title', async () => {
    const { container, getByTestId  } = render(<FormInputs />);
    const formContainer = container.firstChild;
    const titleInput = getByTestId('title');
    expect(formContainer.children[2]).toEqual(titleInput);
    expect(titleInput.placeholder).toEqual('Title');
  });
  it('form.formContainer forth child is a text input with placeholder URL', async () => {
    const { container, getByTestId  } = render(<FormInputs />);
    const formContainer = container.firstChild;
    const urlInput = getByTestId('url');
    expect(formContainer.children[3]).toEqual(urlInput);
    expect(urlInput.placeholder).toEqual('URL');
  });
  it('form.formContainer fifth child is a submit input with value Submit', async () => {
    const { container, getByTestId  } = render(<FormInputs />);
    const formContainer = container.firstChild;
    const submit = getByTestId('submit');
    expect(formContainer.children[4]).toEqual(submit);
    expect(submit.value).toEqual('Submit');
  });
  // it('onClick invokes handleSubmit function in Form component', async () => {
  //    const spy = jest.spyOn(Form.prototype, 'handleSubmit')
  //    spy.mockImplementation(() => 'called')
  //    const wrapper = shallow(<FormInputs />);
  //    const submit = wrapper.find('form.formContainer');
  //    console.log(submit.debug())
  //    submit.simulate('click');
  //    wrapper.update();
  //    expect(spy).toHaveBeenCalledTimes(1);
  //    spy.mockRestore();
  // });

});

