import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Sort from '../Sort';
import './style.scss';

const AdminInterface = ({ component, selectedStudent, selectedTeacher }) => (
  <div>
    <Navbar classColor="logo grey" classLinkColor="menu-link grey" />
    <div className="professor-interface-container">
      <h2 className="professor-interface-title">Interface administrateur</h2>
      <div className="professor-interface">
        <div className="professor-interface-top">
          <div className="button-container">
            <NavLink to="/admin/eleves" type="button" className={`select-button ${selectedStudent}`}>Les élèves</NavLink>
            <NavLink to="/admin/utilisateurs" type="button" className={`select-button ${selectedTeacher}`}>Les profs</NavLink>
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

export default AdminInterface;

AdminInterface.propTypes = {
  component: PropTypes.string.isRequired,
  selectedStudent: PropTypes.string,
  selectedTeacher: PropTypes.string,
};

AdminInterface.defaultProps = {
  selectedStudent: null,
  selectedTeacher: null,
};
