import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../db/students.json';

export const initialState = {
  list: data,
  topStudentsList: data,
};

export const setStudentList = createAction('student/setList');
export const setTopStudentList = createAction('student/setTopStudentsList');

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStudentList, (state, action) => {
      state.list = action.payload;
    })

    .addCase(setTopStudentList, (state, action) => {
      state.topStudentsList = action.payload;
    });
});

export default studentReducer;
