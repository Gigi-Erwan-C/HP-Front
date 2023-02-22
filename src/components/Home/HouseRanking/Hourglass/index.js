import PropTypes from 'prop-types';
import './style.scss';

const Hourglass = ({
  points, name, nameInEnglish, rank, percentage
}) => {
  const firstLetter = Array.from(nameInEnglish)[0];
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
        <div className={`hourglass ${nameInEnglish.toLowerCase()}`}>
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
      <span className="gained-points">(+ {0} points depuis [DATE])</span>
      <h2 className="house-name">{name}</h2>
      <span className="house-name__english">{nameInEnglish}</span>
    </div>
  );
};

Hourglass.propTypes = {
  rank: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  // pointsSinceLastTick: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  nameInEnglish: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Hourglass;
