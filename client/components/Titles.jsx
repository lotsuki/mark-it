import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useTrail, animated} from 'react-spring';


const Titles = ({ titles, setTitles, showConfirm, setShowConfirm }) => {

  const confirmDelete = (e) => {
    if (!showConfirm) {
      let subject = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerText;
      let title = e.target.parentElement.firstChild.innerText;
      setShowConfirm([subject, title]);
    } else {
      setShowConfirm(false)
    }
  };
  const container = ['titles-container']

  const titlesArr = titles.map(obj => obj.title);
  const urlsArr = titles.map(obj => obj.url);
  const config = {duration: 400};

  const trail = useTrail(container.length, {
    config,
    opacity: 1,
    height: 400,
    from: {opacity: 0, height: 0}}
  );

  return (
    <div className="titles-container">
      {
        trail.map(( {height, opacity}, index )=> (
          <animated.div
            className="titles-container"
            style={{height, opacity}}
            key={urlsArr[index]}>
            {
              titlesArr.map((title, i) => (
                <div className="title-wrapper">
                  <a href={urlsArr[i]} className="title" key={title}>{title}</a>
                  <i className="far fa-trash-alt" data-testid="delete-title" onClick={confirmDelete}></i>
                </div>
              ))
            }

          </animated.div>
        ))
      }
    </div>

  );
};



export default Titles;

Titles.propTypes = {
  titles: PropTypes.array,
  setTitles: PropTypes.func,
  displayConfirm: PropTypes.func
};

Titles.defaultProps = {
  titles: [],
  setTitles: () => {},
  displayConfirm: () => {}
};


// return (
//     <ul className="titles-container">
//       {
//         titles.map(obj => (
//           <li key={obj.title} className="title-wrapper">
//             <a href={obj.url} className="title" key={obj.title}>{obj.title}
//             </a>
//             <i className="far fa-trash-alt" data-testid="delete-title" onClick={confirmDelete}></i>
//           </li>
//         ))
//       }
//     </ul>

//   );