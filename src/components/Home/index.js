import WizardRanking from "../WizardRanking";

// == Composant
const Home = () => (
  <div className="home">
    <h2>
      Classement des 4 maisons
      <aside>Mis à jour le [DATE]</aside>
    </h2>
    <div>
      CLASSEMENT ICI
    </div>
    <WizardRanking />
  </div>

);

export default Home;
