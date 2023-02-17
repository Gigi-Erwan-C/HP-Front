import PropTypes from 'prop-types';
import './style.scss';
import houseLogo from '../../../../assets/img/blason-gryffondor.png';

const Student = ({ name, house, points }) => (
  <ul className="student-list">
    <li className="student-item">
      <img className="student-img" src={houseLogo} alt="blason" />
      <div className="text-container">
        <p className="student-name">
          {name}
        </p>
        <p className="student-house">
          {house}
        </p>
      </div>
      <p className="student-point">
        {points}points
      </p>
    </li>
  </ul>
);

export default Student;

Student.propTypes = {
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};
