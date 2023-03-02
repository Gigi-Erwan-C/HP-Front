import PropTypes from 'prop-types';

const SortTypePoints = ({
  sortArray,
}) => (
  <select onChange={sortArray}>
    <option value="a-z">De A à Z</option>
    <option value="z-a">De Z à A</option>
    <option value="1-9">Score décroissant </option>
    <option value="9-1">Scrore croissant</option>
  </select>
);

SortTypePoints.propTypes = {
  sortArray: PropTypes.func.isRequired,
};

// == Export
export default SortTypePoints;
