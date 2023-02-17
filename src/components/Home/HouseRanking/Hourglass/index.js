import PropTypes from 'prop-types';
import './style.scss';

const Hourglass = ({
  rank, points, pointsSinceLastTick, house, houseInEnglish,
}) => (
  <div className="hourglass">
    <div className="score">
      <p>{rank}</p>
    </div>
    <p>image de sablier</p>
    <h3 className="current-points">{points} points</h3>
    <span className="gained-points">(+ {pointsSinceLastTick} points depuis [DATE])</span>
    <h2 className="house-name">{house}</h2>
    <span className="house-name__english">{houseInEnglish}</span>
  </div>

);

Hourglass.propTypes = {
  rank: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  pointsSinceLastTick: PropTypes.number.isRequired,
  house: PropTypes.string.isRequired,
  houseInEnglish: PropTypes.string.isRequired,
};

export default Hourglass;
