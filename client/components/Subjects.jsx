import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Subjects = ({ sidebarSection, category, target }) => {
  // const [ subject, setSubject ] = useState('');
  // setSubject(e.target.innerText)
  // e.target.parentElement.children[1].style.transition = 'height, 0.3s ease-out';
  // useEffect(() => {
  //   target.parentElement.children.style.backgroundColor = 'blue'
  // })

  const changeStyles = () => {
    console.log(target.parentElement.children)
  }

  const subjects = () => {
    return sidebarSection.reduce((a, b) => {
      if(b[category]) { return b[category]; }
      return a;
    }, {});
  };

  return (
    <ul className="subjectContainer" style={{
      zIndex: 1
    }}>
      {
        subjects().map((subject, i) => (
           <li className="subject"
              key={subject}
             style={{
              transitionDelay:`${i * 0.5 / subjects().length}s`
           }}>{subject}</li>
        ))
      }
    </ul>
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

