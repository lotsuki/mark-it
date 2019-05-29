//componentdidmount sends GET request and sets state

import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'

//import { shallow, mount } from 'enzyme';
import App from '../../components/App';
import data from '../../../db/mockData.js';
import mockAxios from 'axios';


describe('<App /> : integration testing',  () => {
  afterEach(cleanup)

  it('componentDidMount sends GET request and sets state with return value', () => {

    const { container, debug } = render(<App />)
    expect(mockAxios.get).toHaveBeenCalled()
  });
});