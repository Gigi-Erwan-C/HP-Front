/* eslint-disable camelcase */
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

export const addPointHouses = () => async (dispatch, getState) => {
  const state = getState();
  const { value, content, user_id } = state.addPoints;
  const house_id = state.addPoints.id;

  try {
    await axiosInstance.post('point/add', {
      house_id,
      value,
      content,
      user_id,
    })
      .then((response) => {
       console.log(response);
      });
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
    console.log(state.addPoints);
  }
};
