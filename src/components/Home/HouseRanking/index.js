import HourGlass from './Hourglass';
import houseData from '../../../db/houses.json';
import './style.scss';

const HouseRanking = () => {
  // Cet array contient les données de points de nos maisons
  const housePoints = houseData.map((house) => (
    house.points
  ));

  const totalPoints = housePoints.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );

  return (
    <div className="house-ranking">
      <h2 className="ranking-type">
        Classement des 4 maisons
      </h2>
      {
      // Ce dont on a besoins pour mapper qui n'est pas dans les data:
      // 1. Rank
      // 2. Le total des points
      // 3. Le pourcentage de chaque maisons
      }
      <div className="ranking-container">
        {houseData.map((house, index) => (
          <HourGlass key={house.id} {...house} rank={index + 1} percentage={((house.points / totalPoints) * 100)} />
        ))}
        {
        // Liste des props à passer à HourGlass:
        // rank (number), points(number), pointsSinceLastTick(number), name(string), nameInEnglish(string),
      }
      </div>

      {
      // Il faudra passer en props les noms des maisons, le nombre de points, les points obtenu au cours du dernier mois. Eventuellement le className aussi.
     }
    </div>
  );
};

export default HouseRanking;
