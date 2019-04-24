import React from 'react';


const Form = ({category, lists, setCategory, data, subjects, subject, title, url, subjectChange, titleChange, urlChange, handleSubmit}) => (
  <div className="addBookmarksForm">
    <input type="text" className="inputList" placeholder="List category" value={category} onChange={setCategory}/>
    <input type="text" className="inputSubject" placeholder="Subject" value={subject} onChange={subjectChange}/>
    <input type="text" className="inputTitle" placeholder="Title" value={title} onChange={titleChange}/>
    <input type="text" className="inputURL" placeholder="URL" value={url} onChange={urlChange}/>
    <input type="submit" value="Add" onClick={handleSubmit}/>
  </div>
);


export default Form;