import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './Reducer';
const middlewares = [thunk]
const store = createStore(allReducers, applyMiddleware(...middlewares));

export default store;