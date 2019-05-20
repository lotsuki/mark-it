import React from 'react';
import PropTypes from 'prop-types';

const Subjects = ({ sidebarSection, category }) => {
  // const [ subject, setSubject ] = useState('');
  // setSubject(e.target.innerText)

  return (
    <div className="subjectContainer">
      {
        sidebarSection && category
        ? (
          sidebarSection.forEach(bookmark => {
            if (bookmark[category]) {
              bookmark[category].map(subject => (
                <a className="subject" href="#" key={subject}>{subject}</a>
              ))
            }
          })
        )
        : ( null )
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

