import { createSlice } from '@reduxjs/toolkit';

const startNewChatSlice = createSlice({
  name: 'newChat',
  initialState: { isNewChat: false },
  reducers: {
    start(state) {
      state.isNewChat = true;
    },
    finish(state) {
      state.isNewChat = false;
    },
  },
});

export const newChatActions = startNewChatSlice.actions;

export default startNewChatSlice.reducer;
