/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  email: 'captain.sportsextremes@herocorp.io',
  password: 'pingpong',
};

export const changeField = createAction('user/changeField');
export const saveUserInfos = createAction('user/saveUserInfos');
export const logout = createAction('user/logout');

const userReducer = createReducer(initialState, (builder) => {
  builder
    
});

export default userReducer;
