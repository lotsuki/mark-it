//when cat is clicked, handle click should be invoked

/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import Categories from '../components/Categories';

//if caateogry-wrapper is clicked, should render subjects comp


describe('<Categories />', () => {
  const props = {
    bmarks: {
      Tech: ['React', 'Python'],
      Travel: ['Munich', 'London'],
      Food: ['Vegan', 'Desserts']
    },
    displayConfirm: () => {},
    titlesUpdate:[]
  };
  it('renders without error', () => {
    shallow(<Categories {...props}/>);
  });
  it('div section wrapper number of children equals length of bmarks', () => {
    const wrapper = shallow(<Categories {...props}/>);
    expect(wrapper.find('.section-wrapper').children().length).toEqual(Object.keys(props.bmarks).length)
  });
  it('when category div is clicked, handleClick is invoked', () => {
    // const wrapper = mount(<Categories {...props}/>);
    // const span = wrapper.find('.category-wrapper').filterWhere(elem => elem.getElement().key === 'Tech')
    // const beforeClick = wrapper.find('.dropdown-container').length
    // span.simulate('click')
    // expect(wrapper.find('.dropdown-container').length).toBeGreaterThan(beforeClick)
  });
});





 // const handleClick = (e) => {
 //    if (isOpen) {
 //      setIsOpen(false);
 //      setCategory('');
 //    } else {
 //      setIsOpen(true);
 //      setCategory(e.target.innerText);
 //    }
 //  };

 //  { bmarks, displayConfirm, titlesUpdate }



