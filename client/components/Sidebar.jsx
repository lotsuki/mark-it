import React from 'react';
import PropTypes from 'prop-types';


class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
    this.setCategories = this.setCategories.bind(this);
  }
//create helper function to

  setCategories() {
    const { data } = this.props;
    const categories = [];
    data.forEach(bookmark => {
      categories.push(bookmark.category);
    });

    this.setState({ categories });
  }

  invokeSetCategories() {
    this.setCategories();
    console.log(this.state.categories)
  }

  render() {
    return(
      <div>
        <SidebarCategories quicklinks/>
        {this.props.data.forEach(bookmark => {
          <div>bookmark.category</div>
        })}
      </div>
    )
  }
};


export default Sidebar;