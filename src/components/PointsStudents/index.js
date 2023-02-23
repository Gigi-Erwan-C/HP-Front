import './style.scss';
import SearchBar from '../SearchBar';
import Filter from '../Filter';
import Student from './Student';
import studentData from '../../db/students.json';
import { Helmet } from 'react-helmet';

const PointsStudents = () => (
  <div className="points-management-recipient">
    <Helmet>
      <title>Gestion des points des élèves</title>
    </Helmet>
    <Filter />
    <SearchBar />
    {studentData.map((student) => (
      <Student
        key={student.id}
        {...student}
      />
    ))}

  </div>
);

export default PointsStudents;
