import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';

const Titles = ({ titles }) => {
  // const [toggle, setToggle] = useState(false);
  // const trail = useTrail(titles.length, {
  //   opacity: toggle ? 1 : 0,
  //   height: toggle ? 50 : 0,
  //   from: { opacity: 0, height: 0}
  // })
  const displayTitleIcons = () => {
    // return <span className="bookmarkIcons">
    //          <select name="icone" id="icone" style={{fontFamily: "'FontAwesome', Arial"}}>
    //          <option>&#xf044;</option>


    //          </select>
    //        </span>

  };

  const addToQuicklinks = (e) => {
    // if(e.target.className.contains('heart')) {
    //   //axios.patch(update)
    //   //add to favorites
    // } else if (e.target.className.contains('star')) {
    //   //add to starred
    // } else if (e.target.className.contains('check')) {
    //   //delete from bookmarks
    //   //add to read
    // }
  };

  return (
    <ul className="titlesContainer">
      {
        titles.map(obj => (
          <li className="title" key={obj.title}>{obj.title}
            <span className="markIcon" onClick={addToQuicklinks}>{displayTitleIcons()}</span>
          </li>

        ))
      }
    </ul>

  );
};

export default Titles;
//<i className="fas fa-heart"></i>
   // <i className="fas fa-star"></i>
   //             <i className="fas fa-check"></i>
   //             <i class="far fa-edit"></i>
   //             <i class="far fa-trash-alt"></i>