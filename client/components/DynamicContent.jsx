import React, { useState, useContext, Fragment } from 'react';
import CustomMenu from './CustomMenu';
import Titles from './Titles';
import Form from './Form';
import Confirm from './Confirm';
import ContentContext from './ContentContext';
import MainContext from './MainContext';

const DynamicContent = () => {
  const { elementForCustomMenu, showTitles, showConfirm } = useContext(ContentContext);
  const { showForm } = useContext(MainContext);

  return (
    <Fragment>
      { elementForCustomMenu && <CustomMenu /> }
      { showTitles && <Titles /> }
      { showForm && <Form /> }
      { showConfirm && <Confirm /> }
    </Fragment>
  )
};

export default DynamicContent;