/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jwt-decode';
import { handleLogged } from '../store/reducers/user';
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
        const user = jwt(token); // decode your token here
        dispatch(handleLogged({
          ...user,
          token,
        }));
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.result.token}`;
        return response.data.result;
      });
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};
