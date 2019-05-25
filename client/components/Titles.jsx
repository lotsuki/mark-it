import React, { useEffect } from 'react';
import utils from '../lib/utils.js';

const Titles = ({ titles, getUrl }) => {
  // const [toggle, setToggle] = useState(false);
  // const trail = useTrail(titles.length, {
  //   opacity: toggle ? 1 : 0,
  //   height: toggle ? 50 : 0,
  //   from: { opacity: 0, height: 0}
  // })

  // useEffect(() => {
  //   //category container to have width 30rem
  //   //title container to have width 30rem
  //   //bookmarks to have width 17rem

  //   //bookmarks
  //   let bookmarks = document.getElementsByClassName('bookmarks');
  //   bookmarks.style.width = '17rem';
  //   //categoryContainer
  //   let catContainer = bookmarks.parentElement.parentElement.parentElement
  //   catContainer.style.width = '30rem';

  //   //titleContainer
  //   let titleContainer = document.getElementsByClassName('titleContainer');
  //   titleContainer.style.width = '30rem';
  // });
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

  const handleMouseEnter = (e) => {
    getUrl(e.target.children[0].href);
  };


  return (
    <ul className="titlesContainer">
      {
        titles.map(obj => (
          <li key={obj.title} className="titleWrapper" onMouseEnter={e => handleMouseEnter(e)}>
            <a href={obj.url} className="title" key={obj.title}>{obj.title}
              <span className="iconsMenu" onClick={addToQuicklinks}>{displayTitleIcons()}</span>
            </a>
          </li>
        ))
      }
    </ul>

  );
};

//access element when hover
//<div className="invokeGetUrl">{getUrl(obj.url)}</div>

export default Titles;
