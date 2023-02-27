/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import houseReducer from './reducers/house';
import studentReducer from './reducers/student';

const store = configureStore({
  reducer: {
    user: userReducer,
    house: houseReducer,
    student: studentReducer,
  },
});

export default store;
