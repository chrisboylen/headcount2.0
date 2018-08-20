import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './CardCont.css';

const CardCont = ({ data, selectCard }) => {
  const displayDistrictCards = Object.values(data).map((district, index) => {
    return  <Card location={ district.location }
      stats={ district.stats }
      isSelected={ district.isSelected }
      key={ `card-${index}` }
      selectCard={selectCard}
    />;
  });

  return (
    <article className="card-cont">
      { displayDistrictCards }
    </article>
  );
};

CardCont.propTypes = {
  selectCard: PropTypes.func,
  data: PropTypes.array
};

export default CardCont;