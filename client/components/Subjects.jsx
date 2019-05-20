import React from 'react';
import PropTypes from 'prop-types';

const Subjects = ({ sidebarSection, category }) => {
  // const [ subject, setSubject ] = useState('');
  // setSubject(e.target.innerText)
  return (
    <div className="subjectContainer">
      {
        sidebarSection.reduce((a, b) => {
          if(b[category]) { return b[category]; }
          return a;
        }, {}).map(subject => (
           <a className="subject" href="#" key={subject}>{subject}</a>
        ))
      }
    </div>
  );
};

export default Subjects;

Subjects.propTypes = {
  sidebarSection: PropTypes.array,
  category: PropTypes.string
};

Subjects.defaultProps = {
  sidebarSection: [],
  category: ''
};

