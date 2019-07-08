import React, { useContext, Fragment } from 'react';
import IconFolder from './IconFolder';
import IconCustomMenu from './IconCustomMenu';
import CategoriesContext from './CategoriesContext';

const SubjectChild = ({ color, subject, subjectID, catID, clickedSubj }) => {
  const { isOpen } = useContext(CategoriesContext);
  let style = clickedSubj === subject ? 'background = #D1D0D3' : 'background = #fff';

  return (
    <Fragment>
      <div className="subject" style={{style}}>
        <IconFolder viewBox={"-50 -15 85 72"} color={color} width={"45"} height={"38"} isOpen={isOpen}/>
        <div className="subject-text">{subject}</div>
         <IconCustomMenu name={subject} subjectID={subjectID} catID={catID}/>
      </div>
    </Fragment>
  )
};

export default SubjectChild;