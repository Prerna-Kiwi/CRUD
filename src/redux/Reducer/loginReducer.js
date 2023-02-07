import {LOGIN_USER} from '../actionType';
const initialState = {
    email:'',
    password:'',
  };
function loginReducer(state = initialState, action) {
  console.log('action.payload', action);
  switch (action.type) {
    case LOGIN_USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default loginReducer;
