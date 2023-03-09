import { Helmet } from 'react-helmet';
import Header from '../../ReusableComponents/Header';

const TeamProject = () => (
  <div>
    <Helmet>
      <title>Equipe projet</title>
    </Helmet>
    <Header />
    <h1>
      Equipe projet
    </h1>
    <h2 className="TeamProject-h2">
      Ce projet a été réalisé avec amour par :
    </h2>
  </div>
);

export default TeamProject;
