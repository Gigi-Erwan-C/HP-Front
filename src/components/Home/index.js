// == Composant
import HouseRanking from './HouseRanking';

const Home = () => (
  <div className="home">
    <HouseRanking />
    <h2>
      Classement des meilleurs sorciers
      <aside>Mis à jour le [DATE] </aside>
    </h2>
    <div>
      CLASSEMENT ICI
    </div>
  </div>

);

export default Home;
