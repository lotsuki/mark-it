import React from 'react';
import PropTypes from 'prop-types';
import Bookmarks from '../components/Bookmarks';
import Quicklinks from '../components/Quicklinks';
import {render, fireEvent, cleanup, waitForElement, waitForDomChange} from 'react-testing-library';
import 'jest-dom/extend-expect';


describe('<SidebarHeader />', () => {
  afterEach(cleanup)
  it('displays text Quick links in Quicklinks component', () => {
    const { getByTestId } = render(<Quicklinks />);
     const sidebarHeaderElem = getByTestId('sidebarHeader');
    expect(sidebarHeaderElem).toHaveTextContent('Quick links');
  });
  it('displays text Bookmarks in Bookmarks component', () => {
    const { getByTestId } = render(<Bookmarks />);
    const sidebarHeaderElem = getByTestId('sidebarHeader');
    expect(sidebarHeaderElem).toHaveTextContent('Bookmarks');
  });
});