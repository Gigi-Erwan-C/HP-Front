import './style.scss';
import { useSelector } from 'react-redux';
import House from './House';
// import houseData from '../../db/houses.json';

const PointsStudents = () => {
  const houseData = useSelector((state) => state.house.sortedList);
  return (
    <div className="points-management-recipient">
      {houseData.map((house, index) => (
        <House
          key={house.id}
          {...house}
          rank={index + 1}
        />
      ))}

    </div>
  );
};

export default PointsStudents;
