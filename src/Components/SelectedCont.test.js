import React from 'react';
import { shallow } from 'enzyme';
import SelectedCont from './SelectedCont';

describe('SELECTEDCONT', () => {
  it('Should match snapshot when there is an empty array', () => {
    const wrapper = shallow(
      <SelectedCont
        selectedCards={[]}
      />
    );

    expect(wrapper.html()).toMatchSnapshot();
  });
});