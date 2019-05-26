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
        <div className="editHeader">Category</div>
        <ul>
          {categories.map(category => (
            <li key={category}><img className="deleteIcon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/>{category}</li>
          ))}
        </ul>
      </div>
      <div className="editWrapper">
        <div className="editHeader">Subject</div>
        <ul>
          {subjects.map(subject => (
            <li key={subject}><img className="deleteIcon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/>{subject}</li>
          ))}
        </ul>
      </div>
      <div className="editWrapper">
        <div className="editHeader">Title</div>
        <ul>
          {
            titles.reduce((a, b) => {
              if (b.title && b.url) {
                return a.concat([<li key={b.title}><a href={b.url} key={b.url}><img className="deleteIcon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/>{b.title}</a></li>]);
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