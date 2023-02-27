import { axiosInstance } from './index';
import { setStudentList, setTopStudentList } from '../store/reducers/student';

// eslint-disable-next-line import/prefer-default-export
export const fetchStudents = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('/students');
    // Dispatch à créer dans le reducer:
    dispatch(setStudentList(data));
    console.log(data);
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

export const fetchTopStudents = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get('/students/top5');
    // Dispatch à créer dans le reducer:
    dispatch(setTopStudentList(data));
    console.log(data);
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};
