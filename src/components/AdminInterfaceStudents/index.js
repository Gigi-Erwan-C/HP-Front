import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdminStudents, deleteStudent } from '../../api/students';
import './style.scss';
import SearchBar from '../SearchBar';
import Student from './Student';
import AddStudentForm from './AddStudentForm';
import { changeTargetId } from '../../store/reducers/adminStudent';
// import studentData from '../../db/students.json';

const AdminInterfaceStudents = () => {
  const studentData = useSelector((state) => state.adminStudent.studentList);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(changeTargetId(id));
  };
  const onClickConfirm = () => {
    dispatch(deleteStudent());
  };
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
          handleFirstClick={handleClick}
          onClickConfirm={onClickConfirm}
        />
      ))}

    </div>
  );
};

export default AdminInterfaceStudents;
