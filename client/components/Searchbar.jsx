import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ links }) => {
  const [ isSearching, setIsSearching ] = useState(false);
  const [ input, setInput ] = useState('');

  const hideSearchbar = (e) => {
    if (e.target.className !== 'searchbar-container' ||
        e.target.className !== 'searchbar-content') {
      setInput('');
      setIsSearching(false);
      document.removeEventListener('click', hideSearchbar);
      let input = document.getElementsByClassName('search-input')[0]
      input.value = '';
    }
  };

  const handleSearch = (e) => {
    let target = e.target;
    if (target.value) {
      setInput(target.value);
      setIsSearching(true);
      document.addEventListener('click', hideSearchbar);
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
        <form action="Submit" className="search-form">
          <div className="search-icon"><i className="fa fa-search"></i></div>
          <input type="text" className="search-input" placeholder="Search bookmarks..." name="search" onChange={handleSearch}/>
        </form>
      </div>
      <div className="searchbar-content">
        {
          isSearching
          ? (
            <ul className="results-wrapper">
              {

                links.reduce((a, b) => {
                  if (b.title && b.url && b.title.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                    return a.concat([<li className="search-result" key={b.title}><a target="_blank" href={b.url} key={b.url}>{b.title}</a></li>]);
                  } else {
                    return a;
                  }
                }, [])

              }
            </ul>
            )
          : (null)

        }
      </div>
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  links: PropTypes.array
};

Searchbar.defaultProps = {
  links: []
};
