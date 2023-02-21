import Student from './Student';
import './style.scss';

const WizardRanking = () => (
  <div className="wizard-ranking">
    <h2 className="wizard-type">Classement des meilleurs sorciers</h2>
    <Student name="Mathieu" house="Gryffondor" points={175} container="text-container-gryffindor" houseName="student-name-gryffindor" houseColor="student-house-gryffindor" />
    <Student name="David" house="Serpentard" points={160} container="text-container-slytherin" houseName="student-name-slytherin" houseColor="student-house-slytherin" />
    <Student name="Jean-Matthieu" house="Serdaigle" points={145} container="text-container-ravenclaw" houseName="student-name-ravenclaw" houseColor="student-house-ravenclaw" />
    <Student name="Gigi" house="Poufsouffle" points={130} container="text-container-hufflepuff" houseName="student-name-hufflepuff" houseColor="student-house-hufflepuff" />
    <Student name="Laurie" house="Serpentard" points={110} container="text-container-slytherin" houseName="student-name-slytherin" houseColor="student-house-slytherin" />
  </div>
);

export default WizardRanking;
