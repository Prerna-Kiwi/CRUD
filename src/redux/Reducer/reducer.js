import {
  USER_LIST,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} from '../actionType';

const initialState = {
  userList: [],
  isLoggedIn: false,
};

function listReducer(state = initialState, action) {

  switch (action.type) {
    case USER_LIST:
      return {...state, userList: action.payload};
    
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case EDIT_USER:
      return {
        ...state,
        userList: state.userList.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case DELETE_USER:
      const filterData = state.userList.filter(item => {
        console.log('filter>>>>', action.payload);
        return item.id !== action.payload.id;
      });
      return {userList: [...filterData]};
    default:
      return state;
  }
}

export default listReducer;

