/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  userData: { ...JSON.parse(localStorage.getItem('user')) },
};

export const changeEmailAndPassword = createAction('user/userData');
export const saveUserInfos = createAction('user/saveUserInfos');
export const setLogged = createAction('user/setLogged');
export const logout = createAction('user/logout');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeEmailAndPassword, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(saveUserInfos, (state, action) => {
      Object.assign(state, action.payload);
    })
    .addCase(setLogged, (state, action) => {
      state.logged = action.payload.value;
    })
    .addCase(logout, (state) => {
      state.logged = false;
      state.pseudo = null;
      state.token = null;
    });
});

export default userReducer;
