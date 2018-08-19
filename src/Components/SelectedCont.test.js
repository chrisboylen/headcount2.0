import React from 'react';
import { shallow, mount } from 'enzyme';
import SelectedCont from './SelectedCont';
import Card from './Card';

describe('SELECTEDCONT', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow (
      <Card 
        location='colorado'
        stats={{key: 1}}
        key={1}
      />
    )

    expect(wrapper.html()).toMatchSnapshot();
  }) 
})