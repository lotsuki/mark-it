import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';


describe('<Navbar />', () => {
  const props1 = {
    showForm: true,
    setShowForm: jest.fn(),
    showEdit: false,
    setShowEdit: jest.fn(),
    titles: []
  };
  const props2 = {
    showForm: false,
    setShowForm: jest.fn(),
    showEdit: true,
    setShowEdit: jest.fn(),
    titles: []
  }
  it('renders without error', () => {
     shallow(<Navbar {...props1}/>);
  });
  it('renders <Searchbar /> ', () => {
     const wrapper = shallow(<Navbar {...props1}/>);
     expect(wrapper.children().find(Searchbar)).toBeDefined();
  });
  it('displays plus and edit icon ', () => {
     const wrapper = shallow(<Navbar {...props1}/>);
     expect(wrapper.containsAnyMatchingElements([<i className="fas fa-plus" ></i>, <i className="fas fa-edit"></i>])).toBe(true);
  });
  it('when plus icon is clicked, setShowForm is invoked with correct props', () => {
    // const wrapper = mount(<Navbar {...props1}/>)
    // const button = wrapper.find(".fas fa-plus")
    // console.log(wrapper.debug())
    // button.simulate('click')
    // expect(props1.setShowForm).toHaveBeenCalledTimes(1)
    // expect(props1.setShowForm).toHaveBeenCalledWith(!props1.showForm)
    // wrapper.unmount()
  });
  it('when edit icon is clicked, setShowEdit is invoked with correct props', () => {
    // const styles = {
    //   appContainer:{style: {height: '0'}},
    //   appContainer: {style: {visibility: 'hidden'}},
    //   editContainerstyle:{gridRow: '2/3'}
    // }
    // const wrapper = shallow(<Navbar {...props2}/>)
    // const button = wrapper.find(".edit-icon")
    // wrapper.debug()
    // button.simulate('click', styles)
    // expect(props2.setShowEdit).toHaveBeenCalledTimes(1)
    // expect(props2.setShowEdit).toHaveBeenCalledWith(!props2.showEdit)
    // wrapper.unmount()
  });
});


//integration

// it('when edit container appears, app-container should have correct styles', () => {
//     const wrapper = mount(<Navbar {...props2}/>)
//     const button = wrapper.find(".fas fa-edit")
//     button.simulate('click')


//     expect(props2.setShowEdit).toHaveBeenCalledTimes(1)
//     expect(props2.setShowEdit).toHaveBeenCalledWith(!props2.showEdit)
//     wrapper.unmount()
// });




