// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SortTypeAlphabetical from './SortTypeAlphabetical';
import SortTypePoints from './SortTypePoints';

// == Import : local
import './style.scss';

// == Composant
const Sort = ({
  array,
  setArray,
  useAlphabetical,
  targetScore,
}) => {
  const dispatch = useDispatch();
  const sortArray = (selectEvent) => {
    const options = {
      'a-z': [...array].sort((a, b) => (a.name < b.name ? -1 : 1)),
      'z-a': [...array].sort((a, b) => (a.name < b.name ? 1 : -1)),
      '1-9': [...array].sort((a, b) => (a.score < b.score ? -1 : 1)),
      '9-1': [...array].sort((a, b) => (a.score < b.score ? 1 : -1)),
    };
    dispatch(setArray(options[selectEvent.target.value]));
  };
  return (
    <form className="form-sort">
      <span className="form-sort-title">Trier par</span>
      {useAlphabetical ? <SortTypeAlphabetical sortArray={sortArray} />
        : <SortTypePoints sortArray={sortArray} />}
    </form>
  );
};

Sort.propTypes = {
  array: PropTypes.array.isRequired,
  setArray: PropTypes.func.isRequired,
  useAlphabetical: PropTypes.bool.isRequired,
  targetScore: PropTypes.number.isRequired,
};

// == Export
export default Sort;
