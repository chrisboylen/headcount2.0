import React from 'react';
import { shallow } from 'enzyme';
import CardCont from './CardCont';

describe('CARDCONT', () => {
  it('Should match snapshot when there is an empty array', () => {
    const wrapper = shallow(<CardCont data={[]} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should match snapshot when there is data in the array', () => {
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
  });
});