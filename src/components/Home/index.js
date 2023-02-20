import WizardRanking from './WizardRanking';

// == Composant
import HouseRanking from './HouseRanking';
import Header from '../Header';

const Home = () => (
  <div className="home">
    <Header />
    <HouseRanking />
    <WizardRanking />
  </div>

);

export default Home;
