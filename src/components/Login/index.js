import Navbar from '../Navbar';
import Field from './Field';

import './style.scss';

const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <Navbar classColor="logo grey" classLinkColor="menu-link grey" />
      <form autoComplete="off" className="login-form-element">
        <h2 className="login-form-title">
          Se connecter
        </h2>
        <Field
          name="email"
          placeholder="Email"
          // onChange={changeField}
          // value="email"
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          // onChange={changeField}
          // value=""
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
