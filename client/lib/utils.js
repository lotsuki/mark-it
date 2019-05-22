
module.exports = {
  updateQuicklinks: function(data) {
    return data.filter(bookmark => {
      if(bookmark.isQuicklink) {
        return {
          category: bookmark.category,
          sites: bookmark.sites
        };
      }
    })
  },
  updateBookmarks: function(data) {
    return data.filter(bookmark => {
      if(!bookmark.isQuicklink) {
        return {
          category: bookmark.category,
          subjects: bookmark.subjects
        };
      }
    })
  },
  displayContent: function(data, category) {
    if (data.length < 1) { return; }
    for (var i = 0; i < data.length; i++) {
      if (data[i].category === category) {
        if (data[i].isQuicklink) {
          return this.titles(data[i].sites, 'title');
        } else {
          return this.titles(data[i].subjects, 'subject');
        }
      }
    }
  },
  titles: function(bookmarks, content) {
    return bookmarks.map(bookmark => ( bookmark[content]));
  }
};



/*
//one document for each user
//identifies user
//lists all categories

{
  id: 123019203,
  username: 'lotsuki',
  password: '234jkji92b490vh0fj',
  qlinkCats: ['Starred', 'Favorites', 'Read'],
  bmarkCats: ['Tech', 'Travel', 'Food']
}

//Bookmark schema
//add on form submit/post req
{
  id: hashed index,
  category: category,
  subject: subject,
  title: string,
  url: string,
  date: string
}

//Quicklink schema
//add on click event
{
  id: hashed index,
  isQuicklink: boolean,
  category: category,
  subject: subject, (optional),
  title: string,
  url: string,
  date: string,
  starred/favorites/read: boolean
}

//put this in localstorage or option for caching, use when first loading app to decrease query lookup time
{
  id: category,
  subject: [{ id: subject, numOfsites: number}]
}

//onLoad
1. store userID, qlinks, bmarks
2. state/object to return on post req =  //if (bookmark.read) { dont include in bmarks array}
{
  userID,
  qlinks: [{qlink: [titles]}],
  bmarks: [{bmark: [subjects]}]
}

//React state
state = {
  userID,
  qlinks,
  bmarks,
  currentCategory, --> hooks[not in main App]
  currentSubject --> hooks[not in main App]
}

//<--------------QUERIES ---------------->

//onClick-subject
Document.find({ category: currentCategory, subject: currentSubject}, {document.title, document.url})

//onClick-quicklink
Document.find({isQuicklink: true, category: currentCategory}, {document.title, document.url})

//onClick-starred/favorites
Document.findAndUpdate({title: currentTitle}, {isQuicklink: true, starred/read/favorites: true})
  //return document and update state: qlinks

//onClick-read
Document.findAndUpdate({title: currentTitle}, {isQuicklink: true, read: true, subjectID: subject/null})

//onClick-delete
Document.deleteOne({title: currentTitle})




**Add a recently deleted section that should hold articles from last 15 days


//main App

import React from 'react';
import Sidebar from 'Sidebar'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID,
      qlinks,
      bmarks
    }
  }


  render() {
    return (
      <Sidebar userId, qlinks, bmarks/>
    );
  }
}

//Categories comp (hook) --> Sidebar will contain QL and BM comps which will contain Categories comp


//Subjects comp
import React, { useState } from 'react';

const Subjects = ({ userID, qlinks, bmarks }) => {
  const [ subject, setSubject ] = useState('');

  const handleClick = (e) => {
    setSubject(e.target.innerText)
  }

  return (
    <div onClick={handleClick}>{subject}</div>
  )
}
*/