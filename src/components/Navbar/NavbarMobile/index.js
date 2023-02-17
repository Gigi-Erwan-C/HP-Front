import PropTypes from 'prop-types';
import './style.scss';

const NavbarMobile = ({
  handleShowLinks,
}) => (
  <div className="menu-burger" onClick={handleShowLinks}>
    <span />
    <span />
    <span />
  </div>

);

NavbarMobile.propTypes = {
  handleShowLinks: PropTypes.func.isRequired,
};

export default NavbarMobile;
