// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Item = ({
  link,
  name,
  image,
}) => (
  <a href={link}>
    <div className="account-list-item">
      <img className="account-list-item-img" src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  </a>
);

Item.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// == Export
export default Item;
