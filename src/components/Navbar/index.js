import './style.scss';

const Navbar = () => (
  <nav className="menu">
    <div className="menu-links">
      <a
        className="menu-link"
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
);

export default Navbar;
