import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchbarInput from './SearchbarInput';
import SearchbarContent from './SearchbarContent';

const Searchbar = ({ links }) => {
  const [ isSearching, setIsSearching ] = useState(false);
  const [ input, setInput ] = useState('');

  return (
    <div className="searchbar-container">
      <SearchbarInput isSearching={isSearching} setIsSearching={setIsSearching} input={input} setInput={setInput}/>
      <SearchbarContent links={links} isSearching={isSearching} input={input}/>
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
