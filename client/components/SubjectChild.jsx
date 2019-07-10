import React, { useContext, Fragment } from 'react';
import IconFolder from './IconFolder';
import IconCustomMenu from './IconCustomMenu';
import CategoriesContext from './CategoriesContext';

const SubjectChild = ({ color, subject, subjectID, catID, clickedSubj }) => {
  const { isOpen } = useContext(CategoriesContext);
  let folderOpen = clickedSubj === subject;
  // let style = folderOpen ? {background: '#D1D0D3'} : {background: ''};

  return (
    <Fragment>
      <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"} folderOpen={folderOpen}/>
      <div className="subject-text">{subject}</div>
    </Fragment>
  )
};

export default SubjectChild;