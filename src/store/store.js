import { createStore } from 'redux';

const authReducer = (state = { isLoggedIn: false, uid: '' }, action) => {
  switch (action.type) {
    case 'login':
      return {
        isLoggedIn: true,
        uid: action.uid,
      };
    case 'logout':
      return {
        isLoggedIn: false,
        uid: '',
      };
    case 'userId':
      return {
        ...state,
        uid: action.uid,
      };
    default:
      return state;
  }
};

const store = createStore(authReducer);
export default store;
