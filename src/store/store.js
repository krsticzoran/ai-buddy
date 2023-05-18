import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import menuReducer from './menu-slice';

const store = configureStore({
  reducer: { auth: authReducer, menu: menuReducer },
});

export default store;
