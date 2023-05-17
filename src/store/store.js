import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, uid: '' },
  reducers: {
    login(state, action) {
      (state.isLoggedIn = true), (state.uid = action.payload);
    },
    logout(state) {
      (state.isLoggedIn = false), (state.uid = '');
    },
  },
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: { isMenuOpen: false },
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer, menu: menuSlice.reducer },
});

export const authActions = authSlice.actions;
export const menuActions = menuSlice.actions;
export default store;
