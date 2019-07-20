import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const SearchbarContent = ({ isSearching, input }) => {
  const { links } = useContext(MainContext);
  console.log(links, 'links')
  //dynamically filters and displays searchbar content
  return (
    <div className="searchbar-content">
      {
        isSearching
        ? (
          <ul className="results-wrapper">
            {
              links.reduce((a, b) => {
                if (b.title && b.url && b.title.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                  return a.concat([<li className="search-result" key={b.url}><a target="_blank" rel="noopener noreferrer" href={b.url} key={b.url}>{b.title}</a></li>]);
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
  )
};

export default SearchbarContent;

SearchbarContent.propTypes = {
  isSearching: PropTypes.bool,
  input: PropTypes.string
};

SearchbarContent.defaultProps = {
  isSearching: false,
  input: ''
};