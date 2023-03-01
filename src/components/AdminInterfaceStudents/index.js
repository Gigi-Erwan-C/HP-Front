import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdminStudents } from '../../api/students';
import './style.scss';
import SearchBar from '../SearchBar';
import Student from './Student';
import AddStudentForm from './AddStudentForm';
// import studentData from '../../db/students.json';

const AdminInterfaceStudents = () => {
  const studentData = useSelector((state) => state.adminStudent.studentList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminStudents());
  }, []);
  return (
    <div className="points-management-recipient">
      <AddStudentForm />
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

export default AdminInterfaceStudents;
