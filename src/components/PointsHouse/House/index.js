/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Field from '../../Login/Field';
import { changeContentAndValue } from '../../../store/reducers/addPoints';
import './style.scss';

const House = ({
  houseName, score,
}) => {
  const content = useSelector((state) => state.addPoints.content);
  const valueContent = useSelector((state) => state.addPoints.value);

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

  const dispatch = useDispatch();
  const handleAddPoint = (evt) => {
    evt.preventDefault();
  };

  const handleInputChange = (value, name) => {
    dispatch(changeContentAndValue({ key: name, value: value }));
  };

  return (
    <div className="point-house">
      <div className="point-student-header">
        <div className="house-header-info">
          <span className="house-point-name">Maison {houseName} </span>
          <span className="house-point-points">{score} points </span>
          {/* <span className="house-rank">Position {rank} </span> */}
        </div>
        <div className="point-house-manage">
          <div className="add" onClick={manageAddPoint}>+</div>
          <div className="delete" onClick={manageDeletePoint}>-</div>
        </div>
      </div>

      {showAdd && (
        <div className="point-house-footer">
          <div className="point-house-footer-manage">
            <span className="point-house-footer-text">Ajouter des points</span>
            <form className="point-house-add" onSubmit={handleAddPoint}>
              <Field
                name="content"
                placeholder="Motif"
                type="text"
                onChange={handleInputChange}
                value={content}
              />

              <Field
                name="value"
                min="0"
                placeholder="Note"
                type="number"
                className="field-note"
                onChange={handleInputChange}
                value={valueContent}
              />

              <button
                type="submit"
                className="point-house-submit"
              >
                Valider
              </button>

              <button
                type="button"
                className="point-house-cancel"
                onClick={manageAddPoint}
              >
                Annuler
              </button>

            </form>
          </div>
        </div>
      )}

      {showDelete && (
        <div className="point-house-footer">
          <div className="point-house-footer-manage">
            <span className="point-house-footer-text">Enlever des points</span>
            <form className="point-house-delete">
              <Field
                name="motif"
                placeholder="Motif"
                type="text"
                  // onChange={changeField}
                  // value="email"
              />

              <Field
                name="note"
                placeholder="Note"
                type="number"
                className="field-note"
                // onChange={changeField}
                // value="email"
              />

              <button
                type="submit"
                className="point-house-submit"
              >
                Valider
              </button>

              <button
                type="button"
                className="point-house-cancel"
                onClick={manageDeletePoint}
              >
                Annuler
              </button>

            </form>
          </div>
        </div>
      )}
    </div>

  );
};

export default House;

House.propTypes = {
  houseName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
