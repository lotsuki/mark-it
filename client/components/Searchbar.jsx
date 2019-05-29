import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ titles }) => {
  const [ isSearching, setIsSearching ] = useState(false);
  const [ input, setInput ] = useState('');

  const handleSearch = (e) => {
    if (e.target.value) {
      setInput(e.target.value);
      setIsSearching(true);
    } else {
      setInput('');
      setIsSearching(false);
    }
  };

  //TODO: SET ATTRIBUTE
  // box-shadow: 0px 8px 16px 1px rgba(0,0,0,0.2);
  // useEffect(() => {
  //   let hasContent = document.getElementsByClassName('searchResult');
  //   var contentContainer = document.getElementsByClassName('resultsWrapper')[0];
  //     console.log(contentContainer)
  //   if(hasContent) {
  //     contentContainer.setAttribute("box-shadow", "0px 8px 16px 1px rgba(0,0,0,0.2)")
  //   }
  // })


  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <form action="Submit">
          <div className="search-icon"><i className="fa fa-search"></i></div>
          <input type="text" placeholder="Search bookmarks..." name="search" onChange={handleSearch}/>
        </form>
      </div>
      <div className="searchbar-content">
        {
          isSearching
          ? (<ul className="results-wrapper">
              {
                titles.reduce((a, b) => {
                  if (b.title && b.url && b.title.toLowerCase().indexOf(input) !== -1) {
                    return a.concat([<li className="search-result" key={b.title}><a href={b.url} key={b.url}>{b.title}</a></li>]);
                  } else {
                    return a;
                  }
                }, [])
              }
            </ul>)
          : (null)

        }
      </div>
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  titles: PropTypes.array
};

Searchbar.defaultProps = {
  titles: []
};
