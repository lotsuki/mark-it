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

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <form action="Submit" className="search-form" label="search-form">
          <div className="search-icon">
            <svg className="icon-search" xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="20 -15 85 85" fill="gray">
              <title>search</title>
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg></div>
          <input type="text" className="search-input" placeholder="Search bookmarks..." label="search" onChange={handleSearch}/>
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
