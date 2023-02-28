import { saveUserInfos } from '../store/reducers/user';
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
        if (response.data.result.token) {
          const serializedState = JSON.stringify(response.data.result);
          localStorage.setItem('user', serializedState);
        }
        dispatch(saveUserInfos(response.data.result));
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.result.token}`;
        return response.data.result;
      });
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};
