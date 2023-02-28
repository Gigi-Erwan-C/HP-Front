/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  content: '',
  value: '',

};

export const changeContentAndValue = createAction('addPoints/changeContentAndValue');

const addPointsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeContentAndValue, (state, action) => {
      state[action.payload.key] = action.payload.value;
    });
});

export default addPointsReducer;
