import React, { useState } from 'react';

const Searchbar = ({ titles }) => {
  const [isSearching, setIsSearching ] = useState(false);

  const handleSearch = (e) => {
    console.log(titles[1])
    setIsSearching(true);
  };

  return (
    <div className="searchbarContainer">
      <div className="searchbar">
        <form action="Submit">
          <div className="searchIcon"><i className="fa fa-search"></i></div>
          <input type="text" placeholder="Search bookmarks..." name="search" onChange={handleSearch}/>
        </form>
      </div>
      <div className="searchbarContent">
        {
          isSearching
          ? (<ul className="resultsWrapper">
              {
                titles.reduce((a, b) => {
                  if (b.title && b.url) {
                    return a.concat([<li className="searchResult"><a href={b.url}>{b.title}</a></li>]);
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


