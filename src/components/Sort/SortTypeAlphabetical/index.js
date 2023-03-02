import PropTypes from 'prop-types';

const SortTypeAlphabetical = ({
  sortArray,
}) => (
  <select onChange={sortArray}>
    <option value="a-z">De A à Z</option>
    <option value="z-a">De Z à A</option>
  </select>
);

SortTypeAlphabetical.propTypes = {
  sortArray: PropTypes.func.isRequired,
};

// == Export
export default SortTypeAlphabetical;
