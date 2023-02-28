/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  content: '',
  value: '',
  id: '',
  user_id: null,

};

export const changeContentAndValue = createAction('addPoints/changeContentAndValue');
export const selectHouse = createAction('addPoints/selectHouse');
export const changeUser = createAction('addPoints/changeUser');

const addPointsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeContentAndValue, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(selectHouse, (state, action) => {
      state.id = action.payload;
    })
    .addCase(changeUser, (state, action) => {
      state.user_id = action.payload;
    });
});

export default addPointsReducer;
