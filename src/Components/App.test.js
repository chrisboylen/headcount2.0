import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should have a default state of data and selectedCards of empty arrays', () => {
    expect(wrapper.state().data.length).toEqual(0);
    expect(wrapper.state().selectedCards.length).toEqual(0);
  });

  it('Should setState with all data when updateCards is invoked without a parameter', () => {
    wrapper.instance().updateCards();

    expect(wrapper.state().data.length).toEqual(181);
  });

  it('Should update state with correct data data when updateCards is invoked with a parameter', () => {
    const mockData = 'COLORADO';
    const expected = [{
      "location": "COLORADO",
      "stats": {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741
      }
    }, {
      "location": "COLORADO SPRINGS 11",
      "stats": {
        "2004": 0.069,
        "2005": 0.509,
        "2006": 0.638,
        "2007": 0.994,
        "2008": 0.992,
        "2009": 1,
        "2010": 0.993,
        "2011": 0.994,
        "2012": 0.993,
        "2013": 0.989,
        "2014": 0.994
      }
    }];

    wrapper.instance().updateCards(mockData);
    expect(wrapper.state().data).toEqual(expected);
    expect(wrapper.state().data.length).toEqual(2);
  });

  it('Should update state when selectCard is invoked', () => {
    const mockData = 'COLORADO';
    const expected = [{
      "location": "COLORADO",
      "isSelected": true,
      "stats": {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741
      }
    }];

    wrapper.instance().selectCard(mockData);

    expect(wrapper.state().selectedCards).toEqual(expected);
    expect(wrapper.state().selectedCards.length).toEqual(1);
  });

  it('Should update state when selectCard is invoked twice', () => {
    const mockData = 'COLORADO';
    const mockData2 = 'ASPEN 1';
    const expected = [{
      "location": "COLORADO",
      "isSelected": true,
      "stats": {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741
      }
    },
    {
      "location": "ASPEN 1",
      "isSelected": true,
      "stats": {
        "2004": 1,
        "2005": 1,
        "2006": 1,
        "2007": 1,
        "2008": 1,
        "2009": 1,
        "2010": 1,
        "2011": 1,
        "2012": 1,
        "2013": 1,
        "2014": 0.992
      }
    }];

    wrapper.instance().selectCard(mockData);
    wrapper.instance().selectCard(mockData2);

    expect(wrapper.state().selectedCards).toEqual(expected);
    expect(wrapper.state().selectedCards.length).toEqual(2);
    expect(wrapper.state().selectedCards[0].isSelected).toBe(true);
    expect(wrapper.state().selectedCards[1].isSelected).toBe(true);
  });

  it('Should remove first element and add to the end when length is two and selectCard is invoked', () => {
    const mockData = "AGATE 300";
    const expected = [
      {
        "location": "ASPEN 1",
        "isSelected": true,
        "stats": {
          "2004": 1,
          "2005": 1,
          "2006": 1,
          "2007": 1,
          "2008": 1,
          "2009": 1,
          "2010": 1,
          "2011": 1,
          "2012": 1,
          "2013": 1,
          "2014": 0.992
        }
      },
      {
        "location": "AGATE 300", 
        "isSelected": true,
        "stats": {
          "2004": 1,
          "2005": 1,
          "2006": 0,
          "2007": 1,
          "2008": 1,
          "2009": 1,
          "2010": 1,
          "2011": 1,
          "2012": 1,
          "2013": 1,
          "2014": 1
        }
      }];

    wrapper.setState({selectedCards: [{
      "location": "COLORADO",
      "isSelected": true,
      "stats": {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741
      }
    },
    {
      "location": "ASPEN 1",
      "isSelected": true,
      "stats": {
        "2004": 1,
        "2005": 1,
        "2006": 1,
        "2007": 1,
        "2008": 1,
        "2009": 1,
        "2010": 1,
        "2011": 1,
        "2012": 1,
        "2013": 1,
        "2014": 0.992
      }
    }]
    });

    wrapper.instance().selectCard(mockData);

    expect(wrapper.state().selectedCards).toEqual(expected);
    expect(wrapper.state().selectedCards.length).toEqual(2);
    expect(wrapper.state().selectedCards[0].isSelected).toBe(true);
    expect(wrapper.state().selectedCards[1].isSelected).toBe(true);
  });

  it('Should mark isSelected false if selectCard is invoked on the same card twice', () => {
    wrapper = mount(<App />);
    const expected = [];

    wrapper.setState({data: [{
      "location": "COLORADO",
      "isSelected": false,
      "stats": {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741
      }
    }],
    selectedCards: []
    });

    wrapper.instance().selectCard('COLORADO');

    expect(wrapper.state().selectedCards.length).toEqual(1);
    expect(wrapper.state().selectedCards).not.toBe(expected);
    expect(wrapper.state().selectedCards[0].isSelected).toBe(true);

    wrapper.instance().selectCard('COLORADO');

    expect(wrapper.state().selectedCards).toEqual(expected);
    expect(wrapper.state().data[0].isSelected).toBe(false);
  });
});
