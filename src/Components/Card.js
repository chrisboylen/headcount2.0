import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ location, stats, isSelected, selectCard }) => {
  const displayStats = Object.entries(stats).map((stat, index) => {
    const lessThan = stat[1] < .5 ? 'stat less-than' : 'stat';

    return <div className={lessThan} key={`stat-${index}`}>{stat[0]} : {stat[1]}</div>;
  });
  
  return (
    <ul className={`card ${isSelected ? 'selected' : ''} `}onClick={() => selectCard(location)}>
      <h2>{location}</h2>
      <li>{displayStats}</li>
    </ul>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  isSelected: PropTypes.bool,
  selectCard: PropTypes.func,
  stats: PropTypes.objectOf(PropTypes.number)
};

export default Card;
