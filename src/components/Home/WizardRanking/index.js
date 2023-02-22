import Student from './Student';
import studentData from '../../../db/students.json';
import './style.scss';

const WizardRanking = () => (
  <div className="wizard-ranking">
    <h2 className="wizard-type">Classement des meilleurs sorciers</h2>
    {studentData.map((student) => (
      <Student
        {...student}
      />
    ))}
  </div>
);

export default WizardRanking;
