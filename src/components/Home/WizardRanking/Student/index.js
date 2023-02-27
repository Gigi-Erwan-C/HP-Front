/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './style.scss';

const Student = ({
  firstname,
  house_name,
  student_total_score,
  houseLogo,
}) => {
  const houseNameLowercase = typeof house_name === 'string' ? house_name.toLowerCase() : '';
  return (
    <ul className="student-list">
      <li className="student-item">
        <img className="student-img" src={houseLogo} alt="blason" />
        <div className={`text-container ${houseNameLowercase}-border`}>
          <p className={`student-name ${houseNameLowercase}`}>
            {firstname}
          </p>
          <p className={`student-house ${houseNameLowercase}`}>
            {house_name}
          </p>
        </div>
        <p className="student-point">
          {student_total_score} points
        </p>
      </li>
    </ul>
  );
};

export default Student;

Student.propTypes = {
  firstname: PropTypes.string.isRequired,
  house_name: PropTypes.string.isRequired,
  student_total_score: PropTypes.number.isRequired,
  // house_name_in_english: PropTypes.string.isRequired,
  houseLogo: PropTypes.string.isRequired,
};
