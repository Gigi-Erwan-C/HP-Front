// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// == Import : local
import './style.scss';

// == Composant
const Sort = ({
  array,
  setArray,
}) => {
  const dispatch = useDispatch();
  const sortArray = (selectEvent) => {
    const options = {
      'a-z': [...array].sort((a, b) => (a.name < b.name ? -1 : 1)),
      'z-a': [...array].sort((a, b) => (a.name < b.name ? 1 : -1)),
      '1-9': [...array].sort((a, b) => (a.house_total_score < b.house_total_score ? -1 : 1)),
      '9-1': [...array].sort((a, b) => (a.house_total_score < b.house_total_score ? 1 : -1)),
    };
    dispatch(setArray(options[selectEvent.target.value]));
  };
  return (
    <form className="form-sort">
      <span className="form-sort-title">Trier par</span>
      <select onChange={sortArray}>
        <option value="a-z">De A à Z</option>
        <option value="z-a">De Z à A</option>
        <option value="1-9">Score décroissant </option>
        <option value="9-1">Scrore croissant</option>
      </select>
    </form>
  );
};

Sort.propTypes = {
  array: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
};

// == Export
export default Sort;
