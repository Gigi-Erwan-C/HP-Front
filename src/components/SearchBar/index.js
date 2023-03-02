import PropTypes from 'prop-types';
import Field from '../Login/Field';
import './style.scss';

const SearchBar = ({
  onSubmit, value,
}) => (
  <form className="search-bar-form" onSubmit={onSubmit}>
    <Field
      type="text"
      placeholder="Rechercher un élève par nom/prénom"
      value={value}
    />
    <button
      type="submit"
      className="login-form-button"
    >
      OK
    </button>
  </form>
);

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
