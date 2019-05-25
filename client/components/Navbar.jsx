import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Navbar = ({ displayForm }) => {
  // const [ addClicked, setAddClicked ] = useState(false);
  const [ editClicked, setEditClicked ] = useState(false);

  const addBookmark = () => {
    displayForm();
  };

  const editBookmark = () => {

  };

  return (
    <nav className="navbar">
      <div className="logoWrapper">
        <div className="name">Mark It</div>
        <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJmSURBVHic7ZqxaxNhGId/73fxHFRUOtSoSK4igoNdBFNR/wA7OBVxsUMhBmop4qBSkEJRKBRUijQNdhFBnBxK/QM0aAIuChmiaIstBEEwi0Obu+91MIMFQbnvLq/S91mT773nnry56QBFURRl60JJDfpcubK/7UXHiLE3qZm/gwnfvHZUz50tN5OY5xxg9VXxQAjMAjgPwLgr/RWWCc9M2465hnAKsPKikOWMqQI45DLHRYFNmO/LP/wSd4DTL8YZMwe5mweAHDjzwGVA7A3orP6qy4yEsBTag3H/CrE3ICI6DvmbBwDDGeqPfTjuQcvYGfds0jDMrrhnu/XU/mfRANIC0mgAaQFpNIC0gDQaQFpAGg0gLSCNBpAWkEYDSAtIowGkBaTRANIC0mgAaQFpNIC0gDQaQFpAGg0gLSCNBpAWkEYDSAtIowGkBaTRANIC0mz5ABm5S3MLoBKICUxFALslLCQ2oMHg4bDl7wtOlW4GA/M3wta2XgYPg/l9t2W6uAFUY7K3g3x2iWjS/vrJkXOz6wAeMU8+Xq42B4nNBMAnu2GVdgAmYCkydvpwvlz505c7YRYBLH6sFk571lxnYBApvpCZSgAGQgM8sYZmgvzcuzgzOsEqn15e7jceXbPARUrBN+GB9B3ECwTczQ2UVpKY2Hdm/i2AS8uvi7cAXAXTCMA7kpgNJBegCab7G9ujhaMnyl8TmrmJ4GfQ8cabwpS/7o2AeBxA1nWua4AGg+9ELf9p50GWOp3A0x+ej93z9mxcIMYESOCd7bXaaE+9PuR3/8qbqdeH/LXaaI+0h6IoivI/8gNhcKW0YQuuTAAAAABJRU5ErkJggg=="/>
      </div>
      <div className="searchbar">
        <form action="Submit">
          <div className="searchIcon"><i className="fa fa-search"></i></div>
          <input type="text" placeholder="Search bookmarks..." name="search"/>
        </form>
      </div>
      <div className="iconsWrapper">
        <div className="plusIcon" onClick={addBookmark}><i className="fas fa-plus" ></i></div>
        <div className="editIcon" onClick={editBookmark}><i className="fas fa-edit"></i></div>
      </div>
    </nav>
  );
};



export default Navbar;



// Navbar.propTypes = {

// };