import PropTypes from 'prop-types';
import Logo from '../Logo';
import './style.scss';

const Navbar = ({
  classColor,
  classLinkColor,
}) => (
  <div className="navbar">
    <Logo classColor={classColor} />
    <nav className="menu">
      <div className="menu-links">
        <a
          className={classLinkColor}
          href="/"
        >
          Accueil
        </a>

        <a
          className={classLinkColor}
          href="/"
        >
          Règles
        </a>

        <a
          className={classLinkColor}
          href="/"
        >
          Histoire des 4 maisons
        </a>
      </div>

      <button className="menu-login" type="button">
        Se connecter
      </button>
    </nav>
  </div>
);

Navbar.propTypes = {
  classColor: PropTypes.string.isRequired,
  classLinkColor: PropTypes.string.isRequired,
};

export default Navbar;
