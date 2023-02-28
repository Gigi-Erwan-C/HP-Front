import './style.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import House from './House';
// import houseData from '../../db/houses.json';

const PointsHouse = () => {
  const houseData = useSelector((state) => state.house.sortedList);

  return (
    <div className="points-management-recipient">
      {houseData.map((house, index) => (
        <House
          key={house.id}
          {...house}
          houseName={house.name}
          rank={index + 1}
        />
      ))}

    </div>
  );
};

export default PointsHouse;
