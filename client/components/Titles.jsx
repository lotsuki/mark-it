import React from 'react';

const Titles = ({ titles }) => {
  console.log(titles[1])

  return (
    <ul className="titlesContainer">
      {
        titles.map(obj => (
          <li className="title" key={obj.title}>{obj.title}</li>
        ))
      }
    </ul>
  );
};

export default Titles;