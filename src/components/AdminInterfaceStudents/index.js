import './style.scss';
import SearchBar from '../SearchBar';
import Filter from '../Filter';
import Student from './Student';
import AddStudentForm from './AddStudentForm';
import studentData from '../../db/students.json';

const PointsStudents = () => (
  <div className="points-management-recipient">
    <Filter />
    <AddStudentForm />
    <SearchBar />
    {studentData.map((student) => (
      <Student
        key={student.id}
        {...student}
        studentClass={student.class}
        allHouses={studentData.house_name}
      />
    ))}

  </div>
);

export default PointsStudents;
