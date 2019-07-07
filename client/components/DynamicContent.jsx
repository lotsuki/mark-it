import React, { useState, useContext, Fragment } from 'react';
import Form from './Form';
import Confirm from './Confirm';
import Titles from './Titles';
import CustomMenu from './CustomMenu';
import utils from '../lib/utils';
import ContentContext from './ContentContext';

const DynamicContent = () => {
  const [ cords, setCords ] = useState([]);
  const { elementForCustomMenu, showTitles, showForm, showConfirm } = useContext(ContentContext);

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