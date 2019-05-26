import React from 'react';

const Edit = ({ bmarks, titles, displayEdit }) => {
  var subjects = [];
  let categories = bmarks.map(obj => {
    for (var key in obj) {
      subjects = subjects.concat(obj[key]);
      return key;
    }
  });

  return (
    <div className="editMain">
      <div className="editWrapper">
        <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
        </ul>
      </div>
      <div className="editWrapper">
        <ul>
        {subjects.map(subject => (
          <li key={subject}>{subject}</li>
        ))}
        </ul>
      </div>
      <div className="editWrapper">
        <ul>
        {
          titles.reduce((a, b) => {
            if (b.title && b.url) {
              return a.concat([<li key={b.title}><a href={b.url} key={b.url}>{b.title}</a></li>]);
            } else {
              return a;
            }
          }, [])
        }
        </ul>
      </div>
    </div>
  )
}

export default Edit;