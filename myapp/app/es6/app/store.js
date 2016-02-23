import { createStore } from 'redux';
import teachers from './counter/teachers';
import pages from './counter/pages';
import teacherPositions from './counter/teacherPositions';
import { combineReducers } from 'redux';
import currentPage from './counter/currentPage';

const reducer = combineReducers({
        teachers,
        currentPage,
        pages,
        teacherPositions
    }),
    store = createStore(reducer);

export default store;
