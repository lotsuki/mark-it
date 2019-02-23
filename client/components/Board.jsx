import React from 'react';
import AddSubjects from './AddSubjects.jsx';
import Dropdown from './Dropdown.jsx';


class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      siteTitle: this.props.title
    }
  }

  render() {
    const {data, subjects, subjectToAdd, subjectToAddChange, addSubject, deleteSubject} = this.props;
    return(
      <div className="boardContainer">
        <div className="boardHeader">
          <div>Bookmarks</div>
        </div>
         <AddSubjects subjects={subjects} subjectToAdd={subjectToAdd} subjectToAddChange={subjectToAddChange} addSubject={addSubject} deleteSubject={deleteSubject}/>
         <div className="boardWrapper">
            {data.map(subject => {
              return <Dropdown  key={subject.subject} subject={subject.subject} sites={subject.sites} />
            })}
        </div>
      </div>
    )
  }
};


export default Board;