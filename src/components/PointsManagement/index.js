import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Sort from '../Sort';
import './style.scss';

const PointsManagement = ({ component, selectedStudent, selectedHouse }) => (
  <div>
    <Navbar classColor="logo grey" classLinkColor="menu-link grey" />
    <div className="professor-interface-container">
      <h2 className="professor-interface-title">Gestion des points</h2>
      <div className="professor-interface">
        <div className="professor-interface-top">
          <div className="button-container">
            <NavLink to="/classement/eleves" type="button" className={`select-button ${selectedStudent}`}>Les élèves</NavLink>
            <NavLink to="/classement/maisons" type="button" className={`select-button ${selectedHouse}`}>Les maisons</NavLink>
          </div>
          <div>
            <Sort />
          </div>
        </div>
        <div>
          {component}
        </div>
      </div>

    </div>
  </div>
);

export default PointsManagement;

PointsManagement.propTypes = {
  component: PropTypes.string.isRequired,
  selectedStudent: PropTypes.string,
  selectedHouse: PropTypes.string,
};

PointsManagement.defaultProps = {
  selectedStudent: null,
  selectedHouse: null,
};
