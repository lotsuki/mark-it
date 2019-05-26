import React from 'react';
//TODO:
//if didn't press enter in input, return to default value

const Edit = ({ bmarks, titles, displayEdit, editUpdate }) => {
  var subjects = [];
  let categories = bmarks.map(obj => {
    for (var key in obj) {
      subjects = subjects.concat(obj[key]);
      return key;
    }
  });

  const editBookmark = (e) => {
    let defaultValue = e.target.defaultValue;
    let newValue = e.target.value;

    // if (categories.indexOf(defaultValue) !== -1) {
    //   axios
    //     .get(`/update/cat/${defaultValue}/${newValue}`, {
    //       method: 'PATCH'
    //     })
    //     .then(result => {
    //       console.log('PATCH request successful')
    //       editUpdate(result);
    //     })
    //     .catch(err => { console.log('Error at PATCH request: ', err); });
    // } else if (subjects.indexOf(defaultValue) !== -1) {
    //   axios
    //     .get(`/update/subj/${defaultValue}/${newValue}`, {
    //       method: 'PATCH'
    //     })
    //     .then(result => {
    //       console.log('PATCH request successful')
    //       editUpdate(result);
    //     })
    //     .catch(err => { console.log('Error at PATCH request: ', err); });
    // } else {
    //   axios
    //     .get(`/update/title/${defaultValue}/${newValue}`, {
    //       method: 'PATCH'
    //     })
    //     .then(result => {
    //       console.log('PATCH request successful')
    //       editUpdate(result);
    //     })
    //     .catch(err => { console.log('Error at PATCH request: ', err); });
    //}
  };

  return (
    <div className="editMain">
      <div className="editWrapper">
        <div className="editHeader">Category</div>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <img className="deleteIcon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/>
              <input type="text" defaultValue={category} onKeyPress={editBookmark}/>
            </li>
          ))}
        </ul>
      </div>
      <div className="editWrapper">
        <div className="editHeader">Subject</div>
        <ul>
          {subjects.map(subject => (
            <li key={subject}>
              <img className="deleteIcon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/>
              <input type="text" defaultValue={subject} onKeyPress={editBookmark}/>
            </li>
          ))}
        </ul>
      </div>
      <div className="editWrapper">
        <div className="editHeader">Title</div>
        <ul>
          {
            titles.reduce((a, b) => {
              if (b.title && b.url) {
                return a.concat([<li key={b.title}><a href={b.url} key={b.url}><img className="deleteIcon" src="https://img.icons8.com/ios/50/000000/delete-sign.png"/><input type="text" defaultValue={b.title} onKeyPress={editBookmark}/></a></li>]);
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