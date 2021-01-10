import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Card({
  handleClick,
  id,
  type,
  flipped,
  height,
  width
}) {
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{ width, height }}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <div className="side card-back">
          <img style={{ height, width }} src={'/img/deck_belakang.png'} />
        </div>

        <div className="side card-front">
          <img style={{ height, width }} src={`/img/${type}.png`} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};
