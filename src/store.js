import {createStore, applyMiddleware, combineReducers} from 'redux';
import {promiseMiddleware, localStorageMiddleware} from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';

const reducer = combineReducers({
    auth,
    home,
    common,
    settings
}); 

const store = createStore(reducer,applyMiddleware(promiseMiddleware,localStorageMiddleware));

export default store;