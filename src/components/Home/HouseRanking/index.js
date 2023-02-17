import HourGlass from './Hourglass';
import './style.scss';

const HouseRanking = () => {
  const hourGlassData = [
    { points: 500 },
    { points: 355 },
    { points: 260 },
    { points: 100 },
  ];

  const totalPoints = hourGlassData.reduce((acc, curr) => acc + curr.points, 0);

  return (
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
          points={hourGlassData[0].points}
          percentage={(hourGlassData[0].points / totalPoints) * 100}
          pointsSinceLastTick={55}
          house="Gryffondor"
          houseInEnglish="Gryffindor"
          totalPoints={totalPoints}
        />
        <HourGlass
          rank={2}
          points={hourGlassData[1].points}
          percentage={(hourGlassData[1].points / totalPoints) * 100}
          pointsSinceLastTick={20}
          house="Serpentard"
          houseInEnglish="Slytherin"
          totalPoints={totalPoints}
        />
        <HourGlass
          rank={3}
          points={hourGlassData[2].points}
          percentage={(hourGlassData[2].points / totalPoints) * 100}
          pointsSinceLastTick={50}
          house="Serdaigle"
          houseInEnglish="Ravenclaw"
          totalPoints={totalPoints}
        />
        <HourGlass
          rank={4}
          points={hourGlassData[3].points}
          percentage={(hourGlassData[3].points / totalPoints) * 100}
          pointsSinceLastTick={0}
          house="Poufsouffle"
          houseInEnglish="Hufflepuff"
          totalPoints={totalPoints}
        />
        {
          // console.log(pointsArray)
        // Liste des props à passer à HourGlass:
        // rank (number), points(number), pointsSinceLastTick(number), house(string), houseInEnglish(string),
      }
      </div>

      {
      // Il faudra passer en props les noms des maisons, le nombre de points, les points obtenu au cours du dernier mois. Eventuellement le className aussi.
     }
    </div>
  );
};

export default HouseRanking;
