import { useSelector } from 'react-redux';
import './style.scss';
import { Helmet } from 'react-helmet';
import SearchBar from '../SearchBar';
import Student from './Student';
// import studentData from '../../db/students.json';

const PointsStudents = () => {
  const studentData = useSelector((state) => state.student.list);
  return (
    <div className="points-management-recipient">
      <Helmet>
        <title>Gestion des points des élèves</title>
      </Helmet>
      <SearchBar />
      {studentData.map((student) => (
        <Student
          key={student.id}
          {...student}
        />
      ))}

    </div>
  );
};

export default PointsStudents;
