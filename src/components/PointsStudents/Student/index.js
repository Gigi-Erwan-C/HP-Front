/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './style.scss';

const Student = ({
  firstname,
  lastname,
  house_name,
  score,
}) => (
  <div className="point-student">
    <div className="point-student-header">
      <div className="student-header-info">
        <span className="student-point-name">{firstname} {lastname} </span>
        <span className="student-point-house">{house_name} </span>
        <span className="student-point-points">{score} points</span>
        <div className="point-student-manage">
          <div className="add">+</div>
          <div className="delete">-</div>
        </div>
      </div>
    </div>
  </div>
);

export default Student;

Student.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  house_name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
