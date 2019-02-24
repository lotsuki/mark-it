import React from 'react';
import Xform from './Xform.jsx';
import Xheader from './Xheader.jsx';
import Xdefaults from './Xdefaults.jsx';
import XbookmarksHeader from './XbookmarksHeader.jsx';
import Xunread from './Xunread.jsx';
//TODO: add correct onChange functions to change state properties, add an addSubject function to add subject to bookmark list, have to dropdown feature (one for topic i.e. code/bucketlist/recipes adn one for subjects i.e. recursion/USA/vegan)
class Xapp extends React.Component {
  constructor() {
    super();

    this.state = {
    };

  }

//Components
  //defaultLists
  //unreadLists
  //subjectToAdd

  render() {
    const { setCategory, category, lists, data, subjects, subject, title, url, subjectChange, titleChange, urlChange, handleSubmit } = this.props;
    return (
      <div className="Xcontainer">
        <Xheader />
        <div className="bodyContainer">
          <div className="bookmarksContainer">
            <XbookmarksHeader />
            <Xdefaults />
            <Xunread data={data}/>
          </div>
          <Xform setCategory={setCategory} category={category} lists={lists} data={data} subjects={subjects} subject={subject} title={title} url={url} subjectChange={subjectChange} titleChange={titleChange} urlChange={urlChange} handleSubmit={handleSubmit}/>
        </div>
      </div>
    )
  }
}


export default Xapp;