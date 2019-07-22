import React, { useContext, Fragment } from 'react';
import CustomMenu from './CustomMenu';
import Titles from './Titles';
import Form from './Form';
import Confirm from './Confirm';
import ContentContext from './ContentContext';
import MainContext from './MainContext';

const DynamicContent = () => {
  const { elementForCustomMenu, showConfirm, titles } = useContext(ContentContext);
  const { showForm } = useContext(MainContext);

  console.log(titles, 'titles')

  //determines what content to display on page
  return (
    <Fragment>
      { elementForCustomMenu && <CustomMenu /> }
      { titles && <Titles /> }
      { showForm && <Form /> }
      { showConfirm && <Confirm /> }
    </Fragment>
  );
};

export default DynamicContent;