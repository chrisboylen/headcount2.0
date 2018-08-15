import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ location, stats}) => {
  const displayStats = Object.entries(stats).map((stat, i) => {
    return <div className="stat" key={`stat-${i}`}>{stat[0]} : {stat[1]}</div>
  })
  
  return (
    <ul className="card">
      <h2>{location}</h2>
      <li>{displayStats}</li>
    </ul>
  )
}

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
}

export default Card;
