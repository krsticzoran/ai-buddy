import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import menuReducer from './menu';
import startNewChatReducer from './startNewChat';

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    newChat: startNewChatReducer,
  },
});

export default store;
