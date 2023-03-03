import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import Navbar from '../Navbar';
import FilterMobile from '../Filter/FilterMobile';

const AdminInterface = ({
  component, selectedStudent, selectedTeacher, page, sortComponent,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    console.log(showFilter);
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" classColorBurger="grey" />
      <div className={`professor-interface-container ${page} ${showFilter ? 'show-filter' : ''}`}>
        <h2 className="professor-interface-title">Interface administrateur</h2>
        <div className="professor-interface">
          <FilterMobile handleShowFilter={handleShowFilter} />
          <div className="profesor-filter">
            <div className="professor-interface-top">
              {showFilter && (
                <div className="header-filter">
                  <div className="close-filter" onClick={handleShowFilter}>
                    ╳
                  </div>
                  Filtrer par
                </div>
              )}
              <div className="button-container">
                {showFilter && (
                  <div className="filter-category">
                    Catégorie
                  </div>
                )}
                <NavLink to="/admin/eleves" type="button" className={`select-button ${selectedStudent}`}>Les élèves</NavLink>
                <NavLink to="/admin/utilisateurs" type="button" className={`select-button ${selectedTeacher}`}>Les profs</NavLink>
              </div>
              <div className="filter-sort">
                {showFilter && (
                  <div className="filter-category">
                    Tri
                  </div>
                )}
                {sortComponent}
              </div>
            </div>
            {showFilter && (
              <div className="filter-category house">
                Les maisons
              </div>
            )}
            <Filter />
          </div>
          <div className="filter-validation">
            <button type="button" onClick={handleShowFilter}>
              Valider
            </button>
          </div>
          <div>
            {component}
          </div>
        </div>

      </div>
    </div>
  );
};
export default AdminInterface;

AdminInterface.propTypes = {
  component: PropTypes.string.isRequired,
  selectedStudent: PropTypes.string,
  selectedTeacher: PropTypes.string,
  page: PropTypes.string.isRequired,
  sortComponent: PropTypes.elementType.isRequired,
};

AdminInterface.defaultProps = {
  selectedStudent: null,
  selectedTeacher: null,
};
