import { createSlice } from '@reduxjs/toolkit';

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

export const authActions = authSlice.actions;

export default authSlice.reducer;
