import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import listReducer from './reducer';

const allReducers = combineReducers({
    listReducer,loginReducer
});

export default allReducers;
