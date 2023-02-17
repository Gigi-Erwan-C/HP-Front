import HourGlass from './Hourglass';
import './style.scss';

const HouseRanking = () => (
  <div className="house-ranking">
    <h2 className="ranking-type">
      Classement des 4 maisons (composant title ici)
    </h2>
    {
      // Il faudra mapper sur un array correspondant aux maisons  pour générer les sabliers avec les classements.
      // Pour l'instant, on les génère en dur:
    }
    <div className="ranking-container">
      <HourGlass
        rank={1}
        points={360}
        pointsSinceLastTick={55}
        house="Gryffondor"
        houseInEnglish="Gryffindor"
      />
      <HourGlass
        rank={2}
        points={355}
        pointsSinceLastTick={20}
        house="Serpentard"
        houseInEnglish="Slytherin"
      />
      <HourGlass
        rank={3}
        points={260}
        pointsSinceLastTick={50}
        house="Serdaigle"
        houseInEnglish="Ravenclaw"
      />
      <HourGlass
        rank={4}
        points={0}
        pointsSinceLastTick={0}
        house="Poufsouffle"
        houseInEnglish="Hufflepuff"
      />
      {
        // Liste des props à passer à HourGlass:
        // rank (number), points(number), pointsSinceLastTick(number), house(string), houseInEnglish(string),
      }
    </div>

    {
      // Il faudra passer en props les noms des maisons, le nombre de points, les points obtenu au cours du dernier mois. Eventuellement le className aussi.
     }
  </div>

);

export default HouseRanking;
