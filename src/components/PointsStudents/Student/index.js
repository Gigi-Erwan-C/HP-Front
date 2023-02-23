/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useState } from 'react';
import './style.scss';

const Student = ({
  firstname, lastname, house_name, score,
}) => {
  const [showAdd, setShowAddForm] = useState(false);
  const [showDelete, setShowDeleteForm] = useState(false);
  const manageAddPoint = () => {
    setShowAddForm(!showAdd);
    if (showDelete) {
      setShowDeleteForm(!showDelete);
    }
  };
  const manageDeletePoint = () => {
    setShowDeleteForm(!showDelete);
    if (showAdd) {
      setShowAddForm(!showAdd);
    }
  };
  return (
    <div className="point-student">
      <div className="point-student-header">
        <div className="student-header-info">
          <span className="student-point-name">{firstname} {lastname} </span>
          <span className="student-point-house">Maison {house_name} </span>
          <span className="student-point-points">{score} points</span>
        </div>
        <div className="point-student-manage">
          <div className="add" onClick={manageAddPoint}>+</div>
          <div className="delete" onClick={manageDeletePoint}>-</div>
        </div>
      </div>
      <div className="point-student-footer">
        {showAdd && (
        <div>hello add </div>
        )}
      </div>

      <div className="point-student-footer">
        {showDelete && (
        <div>hello delete</div>
        )}
      </div>
    </div>

  );
};

export default Student;

Student.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  house_name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
