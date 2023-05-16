import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, uid: '' },
  reducers: {
    login(state, action) {
      (state.isLoggedIn = true), (state.uid = action.uid);
    },
    logout(state) {
      (state.isLoggedIn = false), (state.uid = '');
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;
export default store;
