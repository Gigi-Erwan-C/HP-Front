
import { Helmet } from 'react-helmet';
import Header from '../../ReusableComponents/Header';
import Gigi from '../../../assets/img/gigi.jpg';
import David from '../../../assets/img/david.jpg';
import JM from '../../../assets/img/JM.jpg';
import Laurie from '../../../assets/img/laurie.jpg';
import Mathieu from '../../../assets/img/mathieu.jpg';

const TeamProject = () => (
  <div>
    <Helmet>
      <title>Equipe projet</title>
    </Helmet>
    <Header />
    <h1>
      Equipe projet
    </h1>
    <h2 className="team-project-h2">
      Ce projet a été réalisé avec amour par :
    </h2>
    <article>
      <img src={David} alt="David Ressicaud" />
      <h1>David Ressicaud</h1>
      <a href="https://www.linkedin.com/in/david-ressicaud/">Linkedin</a>
      <a href="https://github.com/David-Ress">Github</a>
    </article>
    <article>
      <img src={Laurie} alt="Laurie Musson" />
      <h1>Laurie Musson</h1>
      <a href="https://www.linkedin.com/in/laurie-shamseldin/">Linkedin</a>
      <a href="https://github.com/LaurieShamseldin">Github</a>
    </article>
    <article>
      <img src={Gigi} alt='Erwan "Gigi" Créoff' />
      <h1>Erwan "Gigi" Créoff</h1>
      <a href="https://www.linkedin.com/in/erwan-creoff/">Linkedin</a>
      <a href="https://github.com/Gigi-Erwan-C">Github</a>
    </article>
    <article>
      <img src={JM} alt="Jean-Matthieu Laffargue" />
      <h1>Jean-Matthieu Laffargue</h1>
      <a href="https://www.linkedin.com/in/jm-laffargue/">Linkedin</a>
      <a href="https://github.com/JM-Laffargue">Github</a>
    </article>
    <article>
      <img src={Mathieu} alt="Mathieu Moye" />
      <h1>Mathieu Moye</h1>
      <a href="https://www.linkedin.com/in/mathieumoye/">Linkedin</a>
      <a href="https://github.com/MathieuMoye">Github</a>
    </article>
  </div>
);

export default TeamProject;
