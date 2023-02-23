import './style.scss';
import Filter from '../Filter';
import User from './User';
import AddUserForm from './AddUserForm';
import userData from '../../db/users.json';

const AdminInterfaceTeachers = () => (
  <div className="points-management-recipient">
    <Filter />
    <AddUserForm />
    {userData.map((user) => (
      <User
        key={user.id}
        {...user}
      />
    ))}

  </div>
);

export default AdminInterfaceTeachers;
