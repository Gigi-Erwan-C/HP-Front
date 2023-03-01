/* eslint-disable camelcase */
import { axiosInstance } from './index';
import { setStudentList, setTopStudentList } from '../store/reducers/student';
import { sendSuccessMessage } from '../store/reducers/addPoints';

// eslint-disable-next-line import/prefer-default-export
export const fetchStudents = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('/student/total-score-and-house');
    // Dispatch à créer dans le reducer:
    dispatch(setStudentList(data));
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const fetchTopStudents = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('/student/top5');
    // Dispatch à créer dans le reducer:
    dispatch(setTopStudentList(data));
    // console.log(data);
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const addPointHouses = () => async (dispatch, getState) => {
  const state = getState();
  const { value, content, user_id } = state.addPoints;
  const student_id = state.addPoints.id;

  try {
    await axiosInstance.post('point/add', {
      student_id,
      value,
      content,
      user_id,
    })
      .then((response) => {
        console.log(response);
        dispatch(sendSuccessMessage('Vos points ont bien été ajouté.'));
      });
  }
  catch (e) {
    console.log('Errorus Console-logus!!!', e);
    console.log(state.addPoints);
  }
};
