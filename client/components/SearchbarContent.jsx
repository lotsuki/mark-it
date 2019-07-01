import React from 'react';

const SearchbarContent = ({ links, isSearching, input }) => (
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
);

export default SearchbarContent;