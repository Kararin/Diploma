import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

import teachers from './counter/teachers';
import pages from './counter/pages';
import teacherPositions from './counter/teacherPositions';
import { combineReducers } from 'redux';
import currentPage from './counter/currentPage';

const reducer = combineReducers({
        teacherPositions
    }),
    store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
