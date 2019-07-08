import React, { useContext } from 'react';
import MainContext from './MainContext';

const SearchbarContent = ({ isSearching, input }) => {
  const { links } = useContext(MainContext);
  console.log(links, 'SEARCHBAR CONTENT LINKS')
  return (
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
  )
};

export default SearchbarContent;