import { saveUserInfos, setLogged } from '../store/reducers/user';
import { axiosInstance } from './index';

// eslint-disable-next-line import/prefer-default-export
export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.user;

  try {
    const { data } = await axiosInstance.post('auth', {
      email,
      password,
    });
    console.log(`First ${data.result}`);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.result.token}`;
    // dispatch(setLogged());
    dispatch(saveUserInfos(data.result));
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};
