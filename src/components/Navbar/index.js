import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import NavbarMobile from './NavbarMobile';
import './style.scss';

const Navbar = ({
  classColor,
}) => {
  // Utilisation du use state pour gérer l'affichage du menu
  const [showLinks, setShowLinks] = useState(false);

  // Fonction permettant d'afficher ou non le menu mobile
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <NavbarMobile handleShowLinks={handleShowLinks} />
      <Logo classColor={classColor} />
      <nav className={`menu ${showLinks ? 'show-nav' : ''}`}>
        <div className={`logo-menu-burger ${showLinks ? 'show-nav' : ''}`}>
          <h1>Coupe des 4 maisons</h1>
        </div>
        <div className="menu-close-burger" onClick={handleShowLinks}>
          ╳
        </div>

        <div className="menu-links">
          <a
            className="menu-link active"
            href="/"
          >
            Accueil
          </a>

          <a
            className="menu-link"
            href="/"
          >
            Règles
          </a>

          <a
            className="menu-link"
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
};

Navbar.propTypes = {
  classColor: PropTypes.string.isRequired,
};

export default Navbar;
