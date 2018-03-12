import {createStore, applyMiddleware, combineReducers} from 'redux';
import {promiseMiddleware, localStorageMiddleware} from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';
import article from './reducers/article';
import articlelist from './reducers/articlelist';
import profile from './reducers/profile';
import editor from './reducers/editor';

const reducer = combineReducers({
    auth,
    home,
    common,
    settings,
    article,
    articlelist,
    profile,
    editor
}); 

const store = createStore(reducer,applyMiddleware(promiseMiddleware,localStorageMiddleware));

export default store;