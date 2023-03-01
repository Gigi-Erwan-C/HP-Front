import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import User from './User';
import AddUserForm from './AddUserForm';
import { fetchUsers } from '../../api/users';
// import userData from '../../db/users.json';

const AdminInterfaceTeachers = () => {
  const userData = useSelector((state) => state.adminUser.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="points-management-recipient">
      <AddUserForm />
      {userData.map((user) => (
        <User
          key={user.id}
          {...user}
        />
      ))}

    </div>

  );
};

export default AdminInterfaceTeachers;
