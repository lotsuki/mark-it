import React, { useState, useContext } from 'react';
import ContentContext from './ContentContext';
import MainContext from './MainContext';
import moment from 'moment';
import utils from '../lib/utils';
import axios from 'axios';

const Form = () => {
  const [ category, setCategory ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ color, setColor ] = useState('#D00000');
  //const [ selectCat, setSelectCat ] = useState(false);
  //const [ selectSub, setSelectSub ] = useState(false);
  const { groups, setGroups, groupsID } = useContext(ContentContext);
  const { setShowForm, links } = useContext(MainContext);

  //update indices of categories or subjects in groups array after deletion
  const updateData = (_hasCat, _hasSubj, _catID, _subject, response) => {
    if (!_hasCat && !_hasSubj) {
      console.log('no')
      setGroups(prevState => prevState.concat({id: groups.length, category, color, subjects: [{id: 0, subject:_subject}]}))
      // groups.push({id: groups.length, category, color, subjects: [{id: 0, subject:_subject}]});
      return groups;
    } else if (!_hasSubj) {
      console.log(groups, 'groups before')
      setGroups(prevState => {
        console.log(prevState, 'prevstate before')
        let _subjects = prevState[_catID].subjects;
        prevState[_catID].subjects.push({id: _subjects.length, subject:_subject});
        console.log(prevState, 'prevstate after')
        return prevState;
      });
      // let _subjects = groups[_catID].subjects;
      // _subjects.push({id: _subjects.length, subject:_subject});
      //return groups;
    } else {
      let data = response.data;
      let newTitleObj = {
        _id: data._id,
        title: data.title,
        url: data.url
      };
      links.push(newTitleObj);
    }
  };
  //submit bookmark
  const submitForm = (e) => {
    e.preventDefault();
    const hasCat = utils.hasCategory(groups, category);
    const catID = utils.findCategoryID(groups, category);
    let hasSubj;
    let subjectL;

    if (catID >= 0) {
      hasSubj = utils.hasSubject(groups, subject, catID);
      subjectL = groups[catID].subjects.length;
    }
    if (category && subject && title && url) {
      axios.post('/form', {
        groupsID,
        categoryL: groups.length,
        category,
        subject,
        title,
        url,
        date: moment().format('MM-DD-YYYY'),
        hasCat,
        hasSubj,
        catID,
        subjectL,
        foldColor: catID >= 0 ? groups[catID].color : color
        })
        .then(res => {
          //updated groups array with correct indices
          updateData(hasCat, hasSubj, catID, subject, res);
        })
        .catch(err => { console.log('Error at POST request', err); });
      setShowForm(false);
    } else {
      alert('All fields must be filled out')
    }
  };

  return(
    <div id="form-container">
      <form className="form"
          data-testid="form"
          name="form"
          autoComplete="off"
          onSubmit={submitForm}>
      <div className="form-category-container">
        <div className="cat-input-wrapper">
          <input
            name="form"
            type="text"
            value={category}
            className="form-input category-input"
            data-testid="category-input"
            placeholder="Category"
            onChange={e => setCategory(e.target.value)}
            />
          <input name="form" type="color" defaultValue="#D00000" className="color" onChange={e => setColor(e.target.value)}/>
        </div>
      </div>
      <div className="sub-input-wrapper">
        <input
          name="form"
          type="text"
          value={subject}
          className="form-input subject-input"
          data-testid="subject-input"
          placeholder="Subject"
          onChange={e => {
            setSubject(e.target.value);
          }}/>
      </div>
      <input
        name="form"
        type="text"
        value={title}
        className="form-inputs"
        data-testid="title-input"
        placeholder="Title"
        onChange={e=> setTitle(e.target.value)}/>
      <input
        name="form"
        type="text"
        value={url}
        className="form-inputs"
        data-testid="url-input"
        placeholder="URL"
        onChange={e => setUrl(e.target.value)}/>
      <input
        name="form"
        type="submit"
        className="form-inputs"
        data-testid="submit"
        value="Submit"/>
    </form>
    </div>
  );
};


export default Form;


  // const displaySelectMenu = (className) => {
  //   console.log(className)
  //   if (className === 'category-input') {
  //     setSelectCat(true);
  //   } else if (className === 'subject-input') {
  //     setSelectSub(true);
  //   }
  // };
//onFocus={e => displaySelectMenu(e.target.className)}
// {
//    <div className="form-dropdown-wrapper">
//         // {
//         //   selectCat &&
//         //   (<ul>
//         //     { categories.map(category => (
//         //       <li>{category}</li>
//         //     ))}
//         //   </ul>)
//         // }
//         </div>
// }


