import {createStore} from 'redux';
import teachers from './counter/teachers';
import pages from './counter/pages';
import {combineReducers} from 'redux';
import currentPage from './counter/currentPage';

const reducer = combineReducers({teachers, currentPage, pages}),
    store = createStore(reducer);

export default store;
