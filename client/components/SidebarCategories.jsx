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
      <div>
        {this.props.categories.map(category => {
          <div className="category">{category}</div>
        })}
      </div>
    )
  }
};

export default SidebarCategories;