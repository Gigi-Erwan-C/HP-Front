/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  role_id: null,
  token: null,
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
      // Object.assign permet de fusionner deux objets.
      // Le première objet est modifier avec les données du second objet
      // Je fais de cette manière car je n'ai pas le droit de réassigner une valeur à un paramètre
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
