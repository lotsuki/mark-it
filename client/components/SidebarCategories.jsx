import React from 'react';
import PropTypes from 'prop-types';


class SidebarCategories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
       <div className="categoryWrapper">
        {this.props.categories.map(category => (
          <div className="category" key={category.category}>{category.category}</div>
        ))}
      </div>
    )
  }
};

export default SidebarCategories;


SidebarCategories.propTypes = {
  categories: PropTypes.array
}
SidebarCategories.defaultProps = {
  categories: []
}