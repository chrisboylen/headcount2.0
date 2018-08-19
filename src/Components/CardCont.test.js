import React from 'react';
import { shallow } from 'enzyme';
import CardCont from './CardCont';
import Card from './Card';

describe('CARDCONT', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(
      <CardCont data={[]} />);
    //   <Card 
    //     location='COLORADO'
    //     stats={{key: 1}}
    //     key={1}
    //   />
    // );

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('Should invoke displayDistrictCards', () => {
    const mockData = [
      {
        location: 'COLORADO',
        stats: {
          2002: 1,
          2003: 6,
          2004: 8,
          2005: 0
        },
        id: 1
      },
      {
        location: 'BINGO',
        stats: {
          2002: 1,
          2007: 6,
          2004: 8,
          2009: 0
        },
        id: 2
      }
    ];

    const wrapper = shallow(
      <CardCont data={mockData} />);

    expect(wrapper.html()).toMatchSnapshot();
  })
})