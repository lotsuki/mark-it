import React, { useState, useEffect } from 'react';

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
                  if (b.title && b.url && b.title.toLowerCase().indexOf(input) !== -1) {
                    return a.concat([<li className="searchResult" key={b.title}><a href={b.url} key={b.url}>{b.title}</a></li>]);
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


