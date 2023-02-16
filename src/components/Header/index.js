import Logo from '../Logo';
import Navbar from '../Navbar';
import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header-nav">
      <Logo classColor="logo white" />
      <Navbar />
    </div>
  </div>
);

export default Header;
