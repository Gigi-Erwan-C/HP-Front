/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from 'react-redux';
import { changeEmailAndPassword } from '../../store/reducers/user';
import Navbar from '../Navbar';
import Field from './Field';

import './style.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  // const logged = useSelector((state) => state.user.logged);
  const { email, password } = userData;

  const handleInputChange = (value, name) => {
    dispatch(changeEmailAndPassword({ key: name, value: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    // handleLogin();
  };

  return (
    <div className="login-form">
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" />
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <h2 className="login-form-title">
          Se connecter
        </h2>
        <Field
          handleChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Email"
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          handleChange={handleInputChange}
          value={password}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          Connexion
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
