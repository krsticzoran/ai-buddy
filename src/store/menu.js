import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: { isMenuOpen: false },
  reducers: {
    toggleMenu(state) {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice.reducer;
