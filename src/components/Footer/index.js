import Logo from '../Logo';
import {Navlink} from 'react-router-dom'
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <Logo classColor="logo grey" />
    <div className="footer-links">
      <Navlink
        className="footer-link"
        href="/equipe-projet"
      >
        Equipe projet
      </Navlink>

      <Navlink
        className="footer-link"
        href="/mentions-legales"
      >
        Mentions légales
      </Navlink>

    </div>
  </footer>

);

export default Footer;
