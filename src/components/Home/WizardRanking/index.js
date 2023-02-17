import Student from './Student';
import './style.scss';

const WizardRanking = () => (
  <div>
    <h1>Classement des meilleurs sorciers</h1>
    <Student name="Mathieu" house="Gryffondor" points={175} />
    <Student name="David" house="Serpentard" points={160} />
    <Student name="Jean-Matthieu" house="Serdaigle" points={145} />
    <Student name="Gigi" house="Poufsouffle" points={130} />
    <Student name="Laurie" house="Serpentard" points={110} />
  </div>
);

export default WizardRanking;
