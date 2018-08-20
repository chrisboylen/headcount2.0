import React from 'react';
import { shallow, mount } from 'enzyme';
import SelectedCont from './SelectedCont';

describe('SELECTEDCONT', () => {
  it('Should match snapshot when there is an empty array', () => {
    const wrapper = shallow (
      <SelectedCont
        selectedCards={[]}
      />
    )

    expect(wrapper.html()).toMatchSnapshot();
  })
  
  it('Should match snapshot when there is data in the array', () => {
    const mockData = [
      {
        location: 'COLORADO',
        isSelected: true,
        stats: {
          2002: 1
        }, 
      },
      {
        location: 'BINGO',
        isSelected: true,
        stats: {
          2002: 1
        }
      }
    ];
    
    const compareDistrictAveragesMock = jest.fn()

    const wrapper = shallow(
      <SelectedCont 
        selectedCards={mockData} 
        compareDistrictAverages={compareDistrictAveragesMock}
      />
    );

    expect(wrapper.html()).toMatchSnapshot();
  })
})