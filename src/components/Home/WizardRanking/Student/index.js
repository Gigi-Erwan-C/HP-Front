import PropTypes from 'prop-types';
import './style.scss';
import houseLogo from '../../../../assets/img/blason-gryffondor.png';

const Student = ({
  name, house,
  points, container,
  houseName,
  houseColor,
}) => (
  <ul className="student-list">
    <li className="student-item">
      <img className="student-img" src={houseLogo} alt="blason" />
      <div className={container}>
        <p className={houseName}>
          {name}
        </p>
        <p className={houseColor}>
          {house}
        </p>
      </div>
      <p className="student-point">
        {points} points
      </p>
    </li>
  </ul>
);

export default Student;

Student.propTypes = {
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  container: PropTypes.string.isRequired,
  houseName: PropTypes.string.isRequired,
  houseColor: PropTypes.string.isRequired,
};
