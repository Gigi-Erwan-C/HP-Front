import Logo from '../Logo';
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <Logo classColor="logo grey" />
    <div className="footer-links">
      <a
        className="footer-link"
        href="/"
      >
        Equipe projet
      </a>

      <a
        className="footer-link"
        href="/"
      >
        Mentions légales
      </a>

    </div>
  </footer>

);

export default Footer;
