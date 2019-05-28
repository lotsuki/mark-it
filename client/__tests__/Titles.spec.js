/**
 * @jest-environment jsdom
*/

import React from 'react';
import Titles from '../components/Titles.jsx';
// import {render, fireEvent, cleanup, waitForElement, waitForDomChange} from 'react-testing-library';
// import 'jest-dom/extend-expect';

//when delete button clicked, confirmDelete is invoked
//confirmDelete invokes displayConfirm with correct args

describe('<Titles />', () => {
  //afterEach(cleanup)
   it('displays text Bookmarks in Bookmarks component', () => {
  //   const mockConfirmFn = jest.fn((subj, tit) => {
  //     console.log(subj, tit);
  //   });
  //   const mockDeleteFn = jest.fn((e = {target: {title: 'title', subject: 'subject'}}) => {
  //     let title = e.target.title;
  //     let subject = e.target.subject;

  //     mockConfirmFn(subject, title)
  //   });

  //   const {container, getByTestId, debug} = render(<Titles />);

    // const button = getByTestId('delete-title');
    // fireEvent.click(button);
    // expect(mockConfirmFn).toHaveBeenCalledTimes(1);
  });
});

