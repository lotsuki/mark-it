/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow } from 'enzyme';
import Category from '../components/Category';


//if category === cat, then style should be...
describe('<Category />', () => {
  const props = {
      category: 'Tech',
      cat: 'Tech'
    }
  it('renders without error', () => {
    shallow(<Category />);
  });
  it('if prop category equals prop cat, will render div category with background color #923192 and color #fff', () => {

    const wrapper = shallow(<Category {...props}/>);
    expect(wrapper.find('.category').prop('style')).toEqual( { backgroundColor: '#923192', color: '#fff' })
  });
  it('renders div with text that equals prop cat', () => {
    const wrapper = shallow(<Category {...props}/>);
    expect(wrapper.find('span').text()).toBe(props.cat)
  });

});
