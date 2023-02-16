import HourGlass from './HourGlass';

const HouseRanking = () => (
  <div className="house-ranking">
    <h2>
      Classement des 4 maisons (composant title ici)
    </h2>
    {
      // Il faudra mapper sur un array correspondant aux maisons  pour générer les sabliers avec les classements.
    }
    <HourGlass />
    <HourGlass />
    <HourGlass />
    <HourGlass />
    {
      // Il faudra passer en props les noms des maisons, le nombre de points, les points obtenu au cours du dernier mois.
     }
  </div>
);

export default HouseRanking;
