/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jwt-decode';
import { handleLogged, sendErrorMessage } from '../store/reducers/user';
import { axiosInstance } from './index';

// eslint-disable-next-line import/prefer-default-export
export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.user;

  try {
    await axiosInstance.post('auth', {
      email,
      password,
    })
      .then((response) => {
        const { token } = response.data.result;
        const user = jwt(token);
        dispatch(handleLogged({
          ...user,
          token,
        }));
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.result.token}`;
        return response.data.result;
      });
  }
  catch (e) {
    dispatch(sendErrorMessage('Votre mot de passe ou votre email est incorrect'));
    console.log('Errorus Console-logus!!!', e);
  }
};
