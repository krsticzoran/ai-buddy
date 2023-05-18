import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import menuReducer from './menu';

const store = configureStore({
  reducer: { auth: authReducer, menu: menuReducer },
});

export default store;
