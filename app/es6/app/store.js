import {createStore} from 'redux';
import teachers from './counter/teachers';
import {combineReducers} from 'redux';
import currentPage from './counter/currentPage';

const reducer = combineReducers({teachers, currentPage}),
    store = createStore(reducer);

export default store;
