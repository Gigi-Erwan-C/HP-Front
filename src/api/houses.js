import { axiosInstance } from './index';
import { setHouseList, sortHouseList } from '../store/reducers/house';
// eslint-disable-next-line import/prefer-default-export
export const fetchHouses = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('house');
    dispatch(setHouseList(data));
    dispatch(sortHouseList(data));
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
  }
};

// export const addPointHouses = () => async (dispatch) => {
//   try {
//     await axiosInstance.post('auth', {
//       email,
//       password,
//     });
//   }
//   catch (e) {
//     console.log('Errorus Console-logus!!!', e);
//   }
// };
