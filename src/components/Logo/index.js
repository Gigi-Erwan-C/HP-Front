import PropTypes from 'prop-types';
import './style.scss';

const Logo = ({
  classColor,
}) => (
  <h1 className={classColor}>Coupe des 4 maisons</h1>
);

Logo.propTypes = {
  classColor: PropTypes.string.isRequired,
};

export default Logo;
