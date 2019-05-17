import React from 'react';
import PropTypes from 'prop-types';
import Bookmarks from '../components/Bookmarks';
import Quicklinks from '../components/Quicklinks';
import {render, fireEvent, cleanup, waitForElement, waitForDomChange} from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<SidebarHeader />', () => {
  afterEach(cleanup)
  it('displays text Quick links in Quicklinks component', () => {
    const { getByText } = render(<Quicklinks />);
    const sidebarHeaderElem = getByText('Quick links');
    expect(sidebarHeaderElem).toBeDefined();
  });
  it('displays text Bookmarks in Bookmarks component', () => {
    const { getByText } = render(<Bookmarks />);
    const sidebarHeaderElem = getByText('My Bookmarks');
    expect(sidebarHeaderElem).toBeDefined();
  });
});