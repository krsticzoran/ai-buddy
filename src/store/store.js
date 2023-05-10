import { createStore } from redux;


const authReducer = (state = {isLoggedIn: false},action) =>{
  if(action.type==='login'){
    return {
      isLoggedIn: true
    }
  }
  if(action.type==='logout'){
    return {
      isLoggedIn: false
    }
  }
  return state;
}

const store = createStore(authReducer);
export default store;