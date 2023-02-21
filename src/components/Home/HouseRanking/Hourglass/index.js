import PropTypes from 'prop-types';
import './style.scss';

const Hourglass = ({
  rank, points, pointsSinceLastTick, house, houseInEnglish, percentage,
}) => {
  const firstLetter = Array.from(houseInEnglish)[0];
  const generateKeyframes = () => `
      @keyframes points${firstLetter} {
        0% {
          height: 0%;
        }
        100% {
          height: ${percentage}%;
        }
      }
    `;
  return (
    <div className="hogwarts">
      <div className="score">
        <p>{rank}</p>
      </div>
      <div className="hourglass-container">
        <div className={`hourglass ${houseInEnglish.toLowerCase()}`}>
          <style>{generateKeyframes()}</style>
          <div className="top">
            <div className="points" />
          </div>
          <div className="middle" />
          {/* <div className="bottom-first" /> */}
          <div className="bottom-second">
            <div className="points" />
          </div>
        </div>
      </div>
      <h3 className="current-points">{points} points</h3>
      <span className="gained-points">(+ {pointsSinceLastTick} points depuis [DATE])</span>
      <h2 className="house-name">{house}</h2>
      <span className="house-name__english">{houseInEnglish}</span>
    </div>
  );
};

Hourglass.propTypes = {
  rank: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  pointsSinceLastTick: PropTypes.number.isRequired,
  house: PropTypes.string.isRequired,
  houseInEnglish: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Hourglass;
